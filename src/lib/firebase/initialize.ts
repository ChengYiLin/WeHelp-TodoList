import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDz2P4QchDjpiEAL5H_QJECDBd1JosBvI4",
    authDomain: "wehelp-todo.firebaseapp.com",
    projectId: "wehelp-todo",
    storageBucket: "wehelp-todo.appspot.com",
    messagingSenderId: "722885103407",
    appId: "1:722885103407:web:48923ab5a43759ed8c5bda",
    measurementId: "G-DRGP58RWZT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
