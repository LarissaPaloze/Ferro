import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBXR6ZLccUrRNtF2-kHIGqMrTit-n4qPhY",
  authDomain: "projetoprodutos-923c1.firebaseapp.com",
  projectId: "projetoprodutos-923c1",
  storageBucket: "projetoprodutos-923c1.firebasestorage.app",
  messagingSenderId: "999010183589",
  appId: "1:999010183589:web:fce23f7ef3f19b3592e04c"
};
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
