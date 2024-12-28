import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDkrAFj-VqagayHLG0oFWKSZ_Hs_-WqmYU",
  authDomain: "leetaan-3033b.firebaseapp.com",
  projectId: "leetaan-3033b",
  storageBucket: "leetaan-3033b.firebasestorage.app",
  messagingSenderId: "1006834610271",
  appId: "1:1006834610271:web:7ca0a4dfc38f94091aabea",
  measurementId: "G-RJXXJJZJJN",
};
console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
