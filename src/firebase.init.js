// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8RuNKQfZHlDGc0VKSZMgxUkq-aR-q7Pc",
  authDomain: "emazon-simple-4aac3.firebaseapp.com",
  projectId: "emazon-simple-4aac3",
  storageBucket: "emazon-simple-4aac3.appspot.com",
  messagingSenderId: "310337257568",
  appId: "1:310337257568:web:e948c04e76c24f0dc44305",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
