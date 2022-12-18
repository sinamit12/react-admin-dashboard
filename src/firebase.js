// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3P5w1YqVi_ckfiVss8X7gP5Ac6QHmwHw",
  authDomain: "shop-e6284.firebaseapp.com",
  projectId: "shop-e6284",
  storageBucket: "shop-e6284.appspot.com",
  messagingSenderId: "2729194172",
  appId: "1:2729194172:web:ea9a25568fdf7632f556b9",
  measurementId: "G-H5C1NM387X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;