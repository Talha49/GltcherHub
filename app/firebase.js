import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAIGCxmty8vo_U6jnvVpD0cE-0rAdlzohA",
  authDomain: "tutorial-sorcecode.firebaseapp.com",
  projectId: "tutorial-sorcecode",
  storageBucket: "tutorial-sorcecode.appspot.com",
  messagingSenderId: "1026585097001",
  appId: "1:1026585097001:web:e5405264b30c2129fa3d38",
  measurementId: "G-LNMH2WZ7M0"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };