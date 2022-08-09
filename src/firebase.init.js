// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_YJSuiIgxDPrtb7spMJhBTYPUS_SZTDY",
    authDomain: "paint-application-df6b6.firebaseapp.com",
    projectId: "paint-application-df6b6",
    storageBucket: "paint-application-df6b6.appspot.com",
    messagingSenderId: "295963969701",
    appId: "1:295963969701:web:83c7220939839a1ca9254c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;