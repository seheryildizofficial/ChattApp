// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";

//console.log(import.meta.env.VITE_API_KEY);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-a3914.firebaseapp.com",
  projectId: "chatapp-a3914",
  storageBucket: "chatapp-a3914.appspot.com",
  messagingSenderId: "1067435054713",
  appId: "1:1067435054713:web:6834a2514034722ee366a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
