// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAW0YZAJFU6pCFQp5j6EFegkVA_PxvKHno",
    authDomain: "order-mananger.firebaseapp.com",
    projectId: "order-mananger",
    storageBucket: "order-mananger.firebasestorage.app",
    messagingSenderId: "127592356569",
    appId: "1:127592356569:web:c7088467061c59cb01fcc8",
    measurementId: "G-MX9MCYNHK8"
  }
};

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);