// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD01FrlkxpQJzVIGO4jY_ueiIWRtj6NABY",
  authDomain: "spice-house-9aae8.firebaseapp.com",
  projectId: "spice-house-9aae8",
  storageBucket: "spice-house-9aae8.appspot.com",
  messagingSenderId: "815669432451",
  appId: "1:815669432451:web:666bd8721beecf2ac7cbb6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
