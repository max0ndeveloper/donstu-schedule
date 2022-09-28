// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCc3YEbiQJw71WN2qbxGa4E1tJ5KPncQkY",
    authDomain: "dstu-schedule.firebaseapp.com",
    projectId: "dstu-schedule",
    storageBucket: "dstu-schedule.appspot.com",
    messagingSenderId: "665821947742",
    appId: "1:665821947742:web:a78967e9d3432babc751cf",
    measurementId: "G-EDL0K1DTFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);