// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBeYsH7nbFPdprtEpOPOMPcMKX__b3Pifk",
    authDomain: "disney-clone-81801.firebaseapp.com",
    projectId: "disney-clone-81801",
    storageBucket: "disney-clone-81801.appspot.com",
    messagingSenderId: "1002418314314",
    appId: "1:1002418314314:web:21261e816c6bab20f31ab3",
    measurementId: "G-J9J5NWMZET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);