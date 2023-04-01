// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCollWcwtQu8_y_8jPOyM6Y_XIOGzDJpZ0",
  authDomain: "dragon-news-8dab0.firebaseapp.com",
  projectId: "dragon-news-8dab0",
  storageBucket: "dragon-news-8dab0.appspot.com",
  messagingSenderId: "598564971982",
  appId: "1:598564971982:web:adb892b75d62cdd0a6379f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;