// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx7nos9G9vJYkg_tILLYeVTMjMyfA5XUA",
  authDomain: "pc-hardware-man-41232.firebaseapp.com",
  projectId: "pc-hardware-man-41232",
  storageBucket: "pc-hardware-man-41232.appspot.com",
  messagingSenderId: "329445636971",
  appId: "1:329445636971:web:046652a743a479ead62a2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
