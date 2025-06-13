import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAG52iRZ0wW2S6H8W-DujLriWVcmii9pvA",
  authDomain: "restaurauto-99ed2.firebaseapp.com",
  projectId: "restaurauto-99ed2",
  storageBucket: "restaurauto-99ed2.firebasestorage.app",
  messagingSenderId: "185338060188",
  appId: "1:185338060188:web:74299f8413b8d58f03fc59",
  measurementId: "G-DVX11GVVL8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();