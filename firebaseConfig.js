import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyAa9Csd0bUOvKGA_WqaiVf3GCGDDlKYAyQ",
  authDomain: "party-needs-db.firebaseapp.com",
  projectId: "party-needs-db",
  storageBucket: "party-needs-db.appspot.com",
  messagingSenderId: "88298915870",
  appId: "1:88298915870:web:9def24b5e5ad001fe7460f",
};

initializeApp(firebaseConfig);
const storage = getStorage();

export { storage };
