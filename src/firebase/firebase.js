// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmCHCy4GOpEi3FEt9mVu4e2E5sfPkMw88",
  authDomain: "portfolio-d6af6.firebaseapp.com",
  projectId: "portfolio-d6af6",
  storageBucket: "portfolio-d6af6.appspot.com",
  messagingSenderId: "284352137911",
  appId: "1:284352137911:web:6cf3d0479ec68c8ac39b32",
  measurementId: "G-G52L5G2SER",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Authentication (services you'll likely use)
const db = getFirestore(app);
const auth = getAuth(app);

// Export services for use in your app
export { app, db, auth };
