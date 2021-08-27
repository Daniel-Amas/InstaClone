import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAbqiEYQgdub9ZiGbMilu_EWEgcVhicXcs",
    authDomain: "codeconnect-instagram-cl-65cb7.firebaseapp.com",
    projectId: "codeconnect-instagram-cl-65cb7",
    storageBucket: "codeconnect-instagram-cl-65cb7.appspot.com",
    messagingSenderId: "85761896250",
    appId: "1:85761896250:web:4d46069d66dc29a916aa03",
    measurementId: "G-W3E1L69XDQ"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};