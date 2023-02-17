// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLaxRZfQSTIMpRssChE7dGcdvTMHJQ3tY",
  authDomain: "ibetica-1.firebaseapp.com",
  projectId: "ibetica-1",
  storageBucket: "ibetica-1.appspot.com",
  messagingSenderId: "756755413929",
  appId: "1:756755413929:web:35d5b5af23db57e801e2b8",
  measurementId: "G-RVBC04PW9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);