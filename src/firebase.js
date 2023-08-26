// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_06CxRF8UIPdQniLLZfHgdkhYGUwnoeY",
  authDomain: "chatnow-6da35.firebaseapp.com",
  projectId: "chatnow-6da35",
  storageBucket: "chatnow-6da35.appspot.com",
  messagingSenderId: "831366882961",
  appId: "1:831366882961:web:6f57bde202c76073014130",
  measurementId: "G-6EZ3R0C6LS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();