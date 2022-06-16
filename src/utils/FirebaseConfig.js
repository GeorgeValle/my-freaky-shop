// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7k4nlILH2z51vlL_CSOp0JKrO4hrSO6w",
    authDomain: "myfreakyshop.firebaseapp.com",
    projectId: "myfreakyshop",
    storageBucket: "myfreakyshop.appspot.com",
    messagingSenderId: "125473201332",
    appId: "1:125473201332:web:d0cbf12be8ecddf3c2cbe1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;