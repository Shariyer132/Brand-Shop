// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuupivozDRtMhF_v2aNdxHZHyEGc2Mt34",
  authDomain: "my-eleventh-assignment-a4058.firebaseapp.com",
  projectId: "my-eleventh-assignment-a4058",
  storageBucket: "my-eleventh-assignment-a4058.appspot.com",
  messagingSenderId: "1040026035410",
  appId: "1:1040026035410:web:7d7a5b3a84359e87b3790b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;