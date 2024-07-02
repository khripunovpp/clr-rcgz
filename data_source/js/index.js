import {app} from "./db.js";
import {doc, getFirestore, setDoc} from "firebase/firestore";

const canvas = document.createElement('canvas');
canvas.width = 64;
canvas.height = 64;
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
    'gray',
];

function generate_random_color() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return {
        r: parseInt(randomColor.slice(0, 2), 16),
        g: parseInt(randomColor.slice(2, 4), 16),
        b: parseInt(randomColor.slice(4, 6), 16),
    }
}

function uuid() {
    return Math.random().toString(36).substr(2, 9);
}

function change_favicon_with_color(color) {
    // remove existing favicons
    const existingLinks = document.querySelectorAll('link[rel="shortcut icon"]');
    existingLinks.forEach((link) => link.remove());

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, 2 * Math.PI);
    ctx.fill();
    const link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = canvas.toDataURL();
    document.head.appendChild(link);
}

function changeColor() {
    currentColor = generate_random_color()
    document.body.style.backgroundColor = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`
    change_favicon_with_color(`rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`)
}

function body_lock(
    lock = true
) {
    document.body.classList.toggle('lock', lock)
}


const session = uuid()
let currentColor = null;

listButtons.forEach((button) => {
    const btn = document.createElement('button')
    btn.textContent = button
    btn.style.backgroundColor = button
    if (button === 'black') {
        btn.style.color = 'white'
    }
    buttons.appendChild(btn)
})

changeColor()

document.body.addEventListener('click', async (e) => {
    if (e.target.tagName === 'BUTTON') {
        try {
            body_lock(true)
            const db = getFirestore(app);
            await setDoc(doc(db, "colors", uuid()), {
                ...currentColor,
                session,
                name: e.target.textContent
            });
            changeColor()
            body_lock(false)
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
})
