import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD0F9Q0ueLoy1WP9sXmK3GKxSJHFnSqR50",
    authDomain: "fir-auth-c77e8.firebaseapp.com",
    projectId: "fir-auth-c77e8",
    storageBucket: "fir-auth-c77e8.appspot.com",
    messagingSenderId: "587579304442",
    appId: "1:587579304442:web:67ba719f48310d7aab5c43",
    measurementId: "G-ZBZKRRGX4Y"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)