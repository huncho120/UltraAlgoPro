// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAH-W8FLvPpOYnvVuBvMh1INyTTN_yO1I",
  authDomain: "ultraalgopro-586c6.firebaseapp.com",
  projectId: "ultraalgopro-586c6",
  storageBucket: "ultraalgopro-586c6.firebasestorage.app",
  messagingSenderId: "904988175168",
  appId: "1:904988175168:web:2cf13726f9f1592ed128a5",
  measurementId: "G-RPLQK041R1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
