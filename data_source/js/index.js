// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";

import {doc, getFirestore, setDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwK2qzKdlGpVS7_QpvgCv9ShsFdSnU9lM",
    authDomain: "color-recognizer-ce9cd.firebaseapp.com",
    projectId: "color-recognizer-ce9cd",
    storageBucket: "color-recognizer-ce9cd.appspot.com",
    messagingSenderId: "903967750673",
    appId: "1:903967750673:web:d58150a97bf94142658fb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
    return {
        r: parseInt(randomColor.slice(0, 2), 16),
        g: parseInt(randomColor.slice(2, 4), 16),
        b: parseInt(randomColor.slice(4, 6), 16),
    }
}

function uuid(){
    return Math.random().toString(36).substr(2, 9);
}

let currentColor = null;
changeColor()

function changeColor() {
    currentColor = generate_random_color()
    document.body.style.backgroundColor = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`
}

document.body.addEventListener('click', async (e) => {
    if (e.target.tagName === 'BUTTON') {

        try {
            const db = getFirestore(app);
            await setDoc(doc(db, "colors", uuid()), currentColor);
            changeColor()
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
})
