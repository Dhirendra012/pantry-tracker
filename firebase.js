// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6wLxtlsh_U8-Drc4bCHJyMZAyaw9b_F0",
  authDomain: "pantry-tracker-157ca.firebaseapp.com",
  projectId: "pantry-tracker-157ca",
  storageBucket: "pantry-tracker-157ca.appspot.com",
  messagingSenderId: "937695485410",
  appId: "1:937695485410:web:63e6ef77d28096a4056dbb",
  measurementId: "G-W4ZTZS2760"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore }