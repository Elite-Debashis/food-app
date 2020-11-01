import firebase from "firebase/app";
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBuKyBRkEoAQ0usKeHFVWEhu8lMmgUFmN0",
    authDomain: "fodd-app.firebaseapp.com",
    databaseURL: "https://fodd-app.firebaseio.com",
    projectId: "fodd-app",
    storageBucket: "fodd-app.appspot.com",
    messagingSenderId: "755715556376",
    appId: "1:755715556376:web:7ce469a93a7e2828ee2f6d",
    measurementId: "G-9V5T0BG9CR"
}

firebase.initializeApp(config)
const db = firebase.firestore()

export const dbMenuRef = db.collection('menu')
