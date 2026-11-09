// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
 authDomain: "automateai-f90e6.firebaseapp.com",
  projectId: "automateai-f90e6",
  storageBucket: "automateai-f90e6.firebasestorage.app",
  messagingSenderId: "463354292008",
  appId: "1:463354292008:web:25898129220cf3ac24521d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

