import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB9Qtce3e4q8HBCcphWPrjgkFdYEe68M1A",
  authDomain: "dragon-resources.firebaseapp.com",
  projectId: "dragon-resources",
  storageBucket: "dragon-resources.appspot.com",
  messagingSenderId: "867744584095",
  appId: "1:867744584095:web:4ef6558a0550d5daae6daa",
};

const app = initializeApp(firebaseConfig);
export default app;
