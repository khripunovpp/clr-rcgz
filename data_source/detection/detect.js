import data from "./../js/data.json";

const colorPicker = document.getElementById('colorPicker')
const resultEl = document.getElementById('result')
const trainBtn = document.getElementById('train')
const loadBtn = document.getElementById('load')
const usedColors = [
    'purple',
    'green',
    'blue',
    'red',
    'yellow',
    'orange',
    'gray',
]

let training = false
let loading = false

const isLocalhost = window.location.hostname === 'localhost';
if (!isLocalhost) {
    trainBtn.disabled = true
}

colorPicker.addEventListener('change', (e) => {
    detectColor()
});

trainBtn.addEventListener('click', (e) => {
    training = true
    loadBtn.disabled = true
    train()
});

loadBtn.addEventListener('click', (e) => {
    loading = true
    trainBtn.disabled = true
    load()
});

let activeColor = '#000000'

function detectColor() {
    activeColor = colorPicker.value
    document.body.style.backgroundColor = activeColor;
    predictColor()

}

function hexadecimalToRgb(hex) {
    return {
        r: parseInt(hex.substring(1, 3), 16),
        g: parseInt(hex.substring(3, 5), 16),
        b: parseInt(hex.substring(5, 7), 16),
    }
}

function normalizeColors(colors) {
    return colors.map((color) => {
        return normalizeColor(color)
    })
}

function normalizeColor(color) {
    const {r, g, b} = color
    return [
        r / 255,
        g / 255,
        b / 255
    ]

}

function getLabelsIndeces(colors) {
    return colors.map((color) => {
        const {name} = color
        return usedColors.indexOf(name)
    })
}

let model = null


function predictColor() {
    tf.tidy(() => {
        const activeColorTensor = tf.tensor2d([normalizeColor(hexadecimalToRgb(activeColor))])

        const prediction = model.predict(activeColorTensor)
        const index = prediction.argMax(1).dataSync()[0]
        const color = usedColors[index]
        console.log({color})

        resultEl.textContent = 'The color is: ' + color
    });
}

function train() {
    const colors = normalizeColors(data.data);
    const labels = getLabelsIndeces(data.data);
    const colorTensor = tf.tensor2d(colors)
    const labelTensor = tf.tensor1d(labels, 'int32')
    const ys = tf.oneHot(labelTensor, usedColors.length)
    labelTensor.dispose()
    console.log({colors, colorTensor, labelTensor, ys})


    model = tf.sequential();
    const hidden = tf.layers.dense({
        units: 16,
        activation: 'sigmoid',
        inputShape: [3]
    })

    const output = tf.layers.dense({
        units: usedColors.length,
        activation: 'softmax'
    })
    model.add(hidden)
    model.add(output)

    const optimizer = tf.train.sgd(0.2)

    model.compile({
        optimizer,
        loss: 'categoricalCrossentropy'
    })

    return model.fit(colorTensor, ys, {
        epochs: 70,
        callbacks: {
            onEpochEnd: async (epoch, log) => {
                console.log(`Epoch ${epoch}: loss = ${log.loss}`)
                predictColor()
            },
            onBatchEnd: tf.nextFrame,
        },
        validationSplit: 0.1,
        shuffle: true
    }).then((history) => {
        console.log(history)
        console.log('Model trained')
    }).then((saveResults) => {
        return model.save('localstorage://color-model').then(() => {
            console.log('Model saved')
        });
    });
}

function load() {
    const url = isLocalhost ? 'localstorage://color-model' : 'https://color-recognizer-ce9cd.web.app/color-model.json'
    return Promise.resolve().then(() => {
        return tf.loadLayersModel(url);
    }).then((m) => {
        console.log('Model loaded');
        m.summary();
        model = m;
        predictColor();
        return m;
    }).catch((err) => {
    });
}
