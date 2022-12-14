import { initializeApp } from "firebase/app";
import { getDatabase } from "@firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFLBf6CC23zI0JO2ivxcD83GRxD2NgeRI",
  authDomain: "crud-1e2a4.firebaseapp.com",
  projectId: "crud-1e2a4",
  storageBucket: "crud-1e2a4.appspot.com",
  messagingSenderId: "827560246783",
  appId: "1:827560246783:web:68a0b2e8515a8a4b743bca"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fs = getFirestore(app);