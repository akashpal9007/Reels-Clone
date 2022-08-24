// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTExcC7r3mSXbXCIYmI9z7iPV8cSt0GPY",
  authDomain: "insta-reels-dbb7a.firebaseapp.com",
  projectId: "insta-reels-dbb7a",
  storageBucket: "insta-reels-dbb7a.appspot.com",
  messagingSenderId: "612934193240",
  appId: "1:612934193240:web:d5fc3ab7bc8055907efa2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { auth };