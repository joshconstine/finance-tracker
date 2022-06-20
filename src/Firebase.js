// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmK7uAtv6Lm0usailnQ6929knWPParAEU",
  authDomain: "financeapp-27b49.firebaseapp.com",
  projectId: "financeapp-27b49",
  storageBucket: "financeapp-27b49.appspot.com",
  messagingSenderId: "309744927435",
  appId: "1:309744927435:web:601d77ce9db0bc434b914e",
  measurementId: "G-LJHLBZ90RF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
