// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdHAlvEZUoDzsTt2Jrh2unqsxUyW_Six8",
  authDomain: "travel-tribe-1cef3.firebaseapp.com",
  projectId: "travel-tribe-1cef3",
  storageBucket: "travel-tribe-1cef3.appspot.com",
  messagingSenderId: "768651134364",
  appId: "1:768651134364:web:035cc9d91899a96fa93459"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;