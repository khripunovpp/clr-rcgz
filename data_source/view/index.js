import {collection, getDocs, getFirestore} from "firebase/firestore";
import {app} from "./../js/db.js";
import {sessions as sessionsToClear} from "./../js/sessions-to-clear.json";
import data from "./../js/data.json";

const colorsRef = document.getElementById('colors')
colorsRef.style.display = 'flex'
colorsRef.style.flexWrap = 'wrap'

const colorsToSplit = [
    'purple:pink',
];

colorsRef.addEventListener('click', (e) => {
    activeSessionKey = e.target.dataset.sessionKey;
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
        colorsRef.appendChild(document.createElement('h2')).textContent = key + ' (' + activeSessionKey + ')'
        render_colors(value, colorsRef)
    });
}

const groupedColors = {}

let activeSessionKey = ''

function group_by_color() {
    data.data.forEach((d) => {
        if (groupedColors[d.name]) {
            groupedColors[d.name].push(d)
        } else {
            groupedColors[d.name] = [d]
        }
    });
}

function render_colors(
    colors,
    container
) {
    colors.forEach((d) => {

        if (sessionsToClear.includes(d.session)) return;

        const color = document.createElement('div')
        color.style.backgroundColor = `rgb(${d.r}, ${d.g}, ${d.b})`
        color.style.opacity = !activeSessionKey?.length ? 1 : activeSessionKey === d.session ? 1 : 0.5;
        color.style.width = '50px'
        color.style.height = '50px'
        // name
        color.textContent = d.name
        color.dataset.sessionKey = d.session
        container.appendChild(color)
    });
}


group_by_color()
await get_all_colors_from_local()
