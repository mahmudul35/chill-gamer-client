// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjWoXlmzo-qnZZqsR7Pm7N7pUOd9DDLGY",
  authDomain: "chillgamer-eaa4c.firebaseapp.com",
  projectId: "chillgamer-eaa4c",
  storageBucket: "chillgamer-eaa4c.firebasestorage.app",
  messagingSenderId: "522780183437",
  appId: "1:522780183437:web:b131feb6b3796ed7c70bc4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
