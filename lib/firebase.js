// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvN2_0SkmcODcqOVqg3Tl0sRmwyHvaSdo",
  authDomain: "vjc-project.firebaseapp.com",
  projectId: "vjc-project",
  storageBucket: "vjc-project.appspot.com",
  messagingSenderId: "232845886321",
  appId: "1:232845886321:web:fbef48eda41d6c188b2cd0",
  measurementId: "G-JPH0CGYTXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };