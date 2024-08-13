// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "react-native-tutorial-80cb5.firebaseapp.com",
  projectId: "react-native-tutorial-80cb5",
  storageBucket: "react-native-tutorial-80cb5.appspot.com",
  messagingSenderId: "979009271318",
  appId: "1:979009271318:web:640bcace7b902a2e92a737",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
