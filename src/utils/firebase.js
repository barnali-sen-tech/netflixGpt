// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlNM0z-fizHOvPWZ1_1edb-7507LIQzCA",
  authDomain: "netflix-gpt-81435.firebaseapp.com",
  projectId: "netflix-gpt-81435",
  storageBucket: "netflix-gpt-81435.appspot.com",
  messagingSenderId: "334351351637",
  appId: "1:334351351637:web:483581a0ad46bd209ff9dc",
  measurementId: "G-BKVLZS8QFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();