// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyzuQy-iTotv6vR6MABmhIAuj-5hZuPYs",
  authDomain: "storekeeper-images.firebaseapp.com",
  projectId: "storekeeper-images",
  storageBucket: "storekeeper-images.appspot.com",
  messagingSenderId: "315583032149",
  appId: "1:315583032149:web:9d3799b21195b7c37e9ddc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);