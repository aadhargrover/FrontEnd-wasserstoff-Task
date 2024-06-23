// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "file-manager-200c8.firebaseapp.com",
  projectId: "file-manager-200c8",
  storageBucket: "file-manager-200c8.appspot.com",
  messagingSenderId: "314787278322",
  appId: "1:314787278322:web:bd14fc03f13e1bf9be8f6b",
  measurementId: "G-ZPVSVHRT9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default (
    app
)