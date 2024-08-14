// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD09Mj6rUArx2614YP5GiFXP_LKGx_KunY",
  authDomain: "clone-9787a.firebaseapp.com",
  projectId: "clone-9787a",
  storageBucket: "clone-9787a.appspot.com",
  messagingSenderId: "551947828487",
  appId: "1:551947828487:web:0ae44d8d8874fb09e119a2",
  measurementId: "G-CFV9389CP0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
