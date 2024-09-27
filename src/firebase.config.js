// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAOb0FNrJ7bM4EI4mYrpuuuie-ZS7xwedU",

  authDomain: "chattingapp-ae7b4.firebaseapp.com",

  projectId: "chattingapp-ae7b4",

  storageBucket: "chattingapp-ae7b4.appspot.com",

  messagingSenderId: "627653156288",

  appId: "1:627653156288:web:96d03f8764bd7c9037bc25",

  measurementId: "G-3PMF87DYB4"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const database = getDatabase(app);

export default database