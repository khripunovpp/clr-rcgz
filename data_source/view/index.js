import {collection, getDocs, getFirestore} from "firebase/firestore";
import {app} from "./../js/db.js";
import data from "./../js/data.json";

const colorsRef = document.getElementById('colors')
colorsRef.style.display = 'flex'
colorsRef.style.flexWrap = 'wrap'

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

async function get_all_colors_from_local() {
    data.data.forEach((d) => {
        const color = document.createElement('div')
        color.style.backgroundColor = `rgb(${d.r}, ${d.g}, ${d.b})`
        color.style.width = '50px'
        color.style.height = '50px'
        // name
        color.textContent = d.name
        colorsRef.appendChild(color)
    });
}

get_all_colors_from_local()