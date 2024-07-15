// database connection

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkrGeUtJU2jK9KGnelGDsRAMYVpkRNB-c",
    authDomain: "login-javascript-d0e2e.firebaseapp.com",
    projectId: "login-javascript-d0e2e",
    storageBucket: "login-javascript-d0e2e.appspot.com",
    messagingSenderId: "846213857578",
    appId: "1:846213857578:web:e4c5993e5db5b00a341e53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};

// console.log("Intialize database")
// console.log(app);
