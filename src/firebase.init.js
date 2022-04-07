// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdhj-geVl6ahn_bISXH3_XBZNFPBNk__Y",
    authDomain: "email-password-auth-bfada.firebaseapp.com",
    projectId: "email-password-auth-bfada",
    storageBucket: "email-password-auth-bfada.appspot.com",
    messagingSenderId: "641686711693",
    appId: "1:641686711693:web:a4d957b94ae40a134121c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;