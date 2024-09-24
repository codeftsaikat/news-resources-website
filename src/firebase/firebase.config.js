// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Qtce3e4q8HBCcphWPrjgkFdYEe68M1A",
  authDomain: "dragon-resources.firebaseapp.com",
  projectId: "dragon-resources",
  storageBucket: "dragon-resources.appspot.com",
  messagingSenderId: "867744584095",
  appId: "1:867744584095:web:4ef6558a0550d5daae6daa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)