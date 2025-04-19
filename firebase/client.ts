// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlHMzpeSsx2QqB1sp-P0qnsA_23GBRMTs",
  authDomain: "interviewprep-90349.firebaseapp.com",
  projectId: "interviewprep-90349",
  storageBucket: "interviewprep-90349.firebasestorage.app",
  messagingSenderId: "988384381141",
  appId: "1:988384381141:web:de9425ff3c05aed34b7a5c",
  measurementId: "G-NLD1HJ3CGY"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);