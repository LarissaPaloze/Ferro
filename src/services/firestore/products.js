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

// Adiciona produto sem userId
export const addProduct = async ({ nome, preco, descricao }) => {
  const docRef = await addDoc(productsCol, {
    nome,
    preco,
    descricao,
    createdAt: Timestamp.now(),
  });
  return docRef.id;
};

// Busca todos os produtos, ordenados por data de criação (sem filtro userId)
export const getProducts = async () => {
  const q = query(productsCol, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Atualiza produto sem userId
export const updateProduct = async (id, { nome, preco, descricao }) => {
  const ref = doc(db, 'products', id);
  await updateDoc(ref, {
    nome,
    preco,
    descricao,
    updatedAt: Timestamp.now(),
  });
};

// Deleta produto
export const deleteProduct = async (id) => {
  await deleteDoc(doc(db, 'products', id));
};
