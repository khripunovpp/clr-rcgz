// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
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
export const app = initializeApp(firebaseConfig);