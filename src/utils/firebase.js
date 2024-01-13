// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-OZFDn7PT8hkpXKbl1497c9yioEBeUaY",
  authDomain: "netflix-2-24ce1.firebaseapp.com",
  projectId: "netflix-2-24ce1",
  storageBucket: "netflix-2-24ce1.appspot.com",
  messagingSenderId: "548565787724",
  appId: "1:548565787724:web:a39845b52f925e87fd40e9",
  measurementId: "G-B11XDWZ0LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();