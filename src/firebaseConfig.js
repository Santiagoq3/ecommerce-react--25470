// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFwmNQgz29uVUwRn08_JfqdvXTDnGa_DA",
  authDomain: "ecommerce-react-25470-3e2cc.firebaseapp.com",
  projectId: "ecommerce-react-25470-3e2cc",
  storageBucket: "ecommerce-react-25470-3e2cc.appspot.com",
  messagingSenderId: "193384165091",
  appId: "1:193384165091:web:3239b94b733457015a5fd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const dbFirebase = getFirestore(app)