const buttons = document.getElementById('buttons')
const listButtons = [
    'blue',
    'red',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink',
    'brown',
    'black',
    'white',
];

listButtons.forEach((button) => {
    const btn = document.createElement('button')
    btn.textContent = button
    btn.style.backgroundColor = button
    if (button === 'black') {
        btn.style.color = 'white'
    }
    buttons.appendChild(btn)
})

function generate_random_color() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

document.body.style.backgroundColor = `#${generate_random_color()}`