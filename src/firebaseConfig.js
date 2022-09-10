import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";

// AIzaSyCLjqggBuypoutNdOI6Lxfvz8BLnd6X768
const firebaseConfig = {
    apiKey: "AIzaSyCLjqggBuypoutNdOI6Lxfvz8BLnd6X768",
    authDomain: "amplify-sounds.firebaseapp.com",
    projectId: "amplify-sounds",
    storageBucket: "amplify-sounds.appspot.com",
    messagingSenderId: "451237499015",
    appId: "1:451237499015:web:c4690172ef936797a86822",
    measurementId: "G-JFJGJ2VEZ2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
