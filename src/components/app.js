import * as app from "firebase/app"
import "firebase/firestore"
import * as firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyA64C0K2ZaqM9z7JYdsbiz7tBhdqgI08W4",
    authDomain: "vk-retriv.firebaseapp.com",
    databaseURL: "https://vk-retriv.firebaseio.com",
    projectId: "vk-retriv",
    storageBucket: "vk-retriv.appspot.com",
    messagingSenderId: "160051800341",
    appId: "1:160051800341:web:7ee1b6cb681ff33769e11c",
    measurementId: "G-RWMBX0D1J6"
});

const db = firebase.firestore();

export {db}
