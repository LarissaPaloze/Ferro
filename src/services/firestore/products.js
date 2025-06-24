import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  Timestamp,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from '../../config/firebase';

const productsCol = collection(db, 'products');

export const addProduct = async ({ nome, preco, descricao }) => {
  const docRef = await addDoc(productsCol, {
    nome,
    preco,
    descricao,
    createdAt: Timestamp.now(),
  });
  return docRef.id;
};

export const getProducts = async () => {
  const q = query(productsCol, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const updateProduct = async (id, { nome, preco, descricao }) => {
  const ref = doc(db, 'products', id);
  await updateDoc(ref, {
    nome,
    preco,
    descricao,
    updatedAt: Timestamp.now(),
  });
};

export const deleteProduct = async (id) => {
  await deleteDoc(doc(db, 'products', id));
};
