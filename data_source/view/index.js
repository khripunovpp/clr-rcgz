import {collection, getDocs, getFirestore} from "firebase/firestore";
import {app} from "./../js/db.js";
import data from "./../js/data.json";

const colorsRef = document.getElementById('colors')
colorsRef.style.display = 'flex'
colorsRef.style.flexWrap = 'wrap'

const colorsToSplit = [
    'purple:pink',
];

const excludedSessions = [

];

const excludedIds = [

]

colorsRef.addEventListener('click', (e) => {

    if (e.target.tagName === 'H2') return;
    if (!e.target.classList.contains('color')) {
        activeSessionKey = ''
        activeRgb = ''
        activeId = ''
    }
    activeSessionKey = e.target.dataset.sessionKey;
    activeRgb = e.target.dataset.color;
    document.body.style.backgroundColor = activeRgb
    activeId = e.target.dataset.id;
    clear_colors()
    get_all_colors_from_local()
});

async function get_all_colors_from_db() {
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "colors"));
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const color = document.createElement('div')
        color.style.backgroundColor = `rgb(${data.r}, ${data.g}, ${data.b})`
        color.style.width = '50px'
        color.style.height = '50px'
        // name
        color.textContent = data.name
        colorsRef.appendChild(color)
    });
}

function clear_colors() {
    colorsRef.innerHTML = ''
}

async function get_all_colors_from_local() {
    Object.entries(groupedColors).forEach(([key, value]) => {
        colorsRef.appendChild(document.createElement('h2')).textContent = key + ' (' + activeSessionKey + ') ' + activeRgb + ' ' + activeId
        render_colors(value, colorsRef)
    });
}

const groupedColors = {}

let activeSessionKey = ''
let activeRgb = ''
let activeId = ''

function filter_colors() {
    return data.data.reduce((acc, c, i) => {
        if (inExcluded(c)) return acc;
        acc.push(c)
        return acc
    }, []);
}

function group_by_color(colors) {
    colors.forEach((d) => {
        if (groupedColors[d.name]) {
            groupedColors[d.name].push(d)
        } else {
            groupedColors[d.name] = [d]
        }
    });
}


function inExcluded(color) {
    if (excludedIds.some(c => c == color.id)) return true;
    return excludedSessions.find((s) => {

        return color.session === s
    })
}

function render_colors(
    colors,
    container
) {
    colors.forEach((d) => {

        const color = document.createElement('div')
        const rgbStr = `rgb(${d.r}, ${d.g}, ${d.b})`
        color.style.backgroundColor = `rgb(${d.r}, ${d.g}, ${d.b})`
        color.style.opacity = !activeSessionKey?.length ? 1 : activeSessionKey === d.session ? 1 : 0.1;
        color.style.width = '50px'
        color.style.height = '50px'
        color.classList.add('color')
        // name
        color.textContent = d.name
        color.dataset.sessionKey = d.session
        color.dataset.color = rgbStr
        color.dataset.id = d.id
        container.appendChild(color)
    });
}

const resultColors = filter_colors()
console.log({resultColors})
group_by_color(resultColors)
Promise.resolve().then(() => get_all_colors_from_local())
