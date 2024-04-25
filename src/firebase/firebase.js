import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// import dotenv from 'dotenv'

// dotenv.config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FirebaseApiToken, 
  authDomain: "freshmarket-bb72a.firebaseapp.com",
  projectId: "freshmarket-bb72a",
  storageBucket: "freshmarket-bb72a.appspot.com",
  messagingSenderId: "407367493560",
  appId: "1:407367493560:web:9512edd553c21bbd88114d",
  measurementId: "G-CXPSZX3XZC",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage()

export { app, auth, db ,storage };
