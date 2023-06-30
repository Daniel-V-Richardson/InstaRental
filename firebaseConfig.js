// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdoukwK3zcWq41I0LPuJXa344hVmIYH9A",
  authDomain: "instarental-d2406.firebaseapp.com",
  projectId: "instarental-d2406",
  storageBucket: "instarental-d2406.appspot.com",
  messagingSenderId: "381853206499",
  appId: "1:381853206499:web:67e373d0cd6c2791edc2d6",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
