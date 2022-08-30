// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth" 
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

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
const storage = getStorage(app);
const auth = getAuth();
const db = getFirestore(app);
export { auth, storage, db };