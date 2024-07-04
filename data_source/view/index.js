import {collection, getDocs, getFirestore} from "firebase/firestore";
import {app} from "./../js/db.js";

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

get_all_colors_from_db()