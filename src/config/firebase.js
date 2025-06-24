// config/firebase.js
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCA8p2WT5eIaGO-sSnXt_SmJ69pjHZC9wc",
  authDomain: "appgestao-ceec1.firebaseapp.com",
  projectId: "appgestao-ceec1",
  storageBucket: "appgestao-ceec1.firebasestorage.app",
  messagingSenderId: "864950016116",
  appId: "1:864950016116:web:7e51864b1201f16490d921"
};

// Verifica se já existe uma instância do Firebase para evitar o erro
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
