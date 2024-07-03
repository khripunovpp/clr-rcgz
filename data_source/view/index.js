import {collection, getDocs, getFirestore} from "firebase/firestore";
import {app} from "./../js/db.js";

let grouping = 'colors'

const colorsRef = document.getElementById('colors')
colorsRef.style.display = 'flex'
colorsRef.style.flexWrap = 'wrap'

const groupByColorRef = document.getElementById('group-by-color')
groupByColorRef.addEventListener('click', () => {
    set_grouping('colors')
})
const groupBySessionRef = document.getElementById('group-by-session')
groupBySessionRef.addEventListener('click', () => {
    set_grouping('session')
})

function set_grouping(gr) {
    grouping = gr
    colorsRef.innerHTML = ''
    get_all_colors_from_db()
}

function group_colors_by_session(
    colors
) {

}

const grouped_by = {
    colors: new Map(),
    session: new Map()
}

async function get_all_colors_from_db() {
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "colors"));
    querySnapshot.forEach((doc) => {
        const data = doc.data();

        put_to_group(grouped_by.colors, data.name, data)
        put_to_group(grouped_by.session, data.session, data)
    });

    render_colors()
}

function put_to_group(grouped_by, key, data) {
    if (!grouped_by.has(key)) {
        grouped_by.set(key, [])
    }
    grouped_by.get(key).push(data)
}

function render_colors() {
    colorsRef.innerHTML = ''
    console.log(grouped_by, grouping, grouped_by[grouping])
    grouped_by[grouping].entries().forEach(colorData => {
        const colorEl = document.createElement('div')
        colorEl.style.backgroundColor = `rgb(${colorData.r}, ${colorData.g}, ${colorData.b})`
        colorEl.style.width = '50px'
        colorEl.style.height = '50px'
        // name
        colorEl.textContent = colorData.name
        colorsRef.appendChild(colorEl)
    });
}

get_all_colors_from_db()