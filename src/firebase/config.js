import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnFSTR1V0st10KneyuvQR2E7fLwgzjuKI",
  authDomain: "budget-planner-dd58c.firebaseapp.com",
  projectId: "budget-planner-dd58c",
  storageBucket: "budget-planner-dd58c.firebasestorage.app",
  messagingSenderId: "746896260236",
  appId: "1:746896260236:web:78c8f399469fa86b53cfa9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);