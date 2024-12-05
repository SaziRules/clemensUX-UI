import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCmAKEdW1UcB48E6ERtQi6yLNsF_w_Mu0U",
    authDomain: "clemens-e3743.firebaseapp.com",
    projectId: "clemens-e3743",
    storageBucket: "clemens-e3743.firebasestorage.app",
    messagingSenderId: "334701692918",
    appId: "1:334701692918:web:9b6114cebba91ecd2d29d7"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
