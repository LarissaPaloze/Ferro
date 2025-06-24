import React, { createContext, useState, useEffect } from 'react';
import * as service from '../services/firestore/products.js';

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadProducts = async () => {
    setLoading(true);
    const data = await service.getProducts();
    setProducts(data);
    setLoading(false);
  };

  const addNew = async (produto) => {
    const id = await service.addProduct(produto);
    await loadProducts();
    return id;
  };

  const update = async (id, produto) => {
    await service.updateProduct(id, produto);
    await loadProducts();
  };

  const remove = async (id) => {
    await service.deleteProduct(id);
    await loadProducts();
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, loading, loadProducts, addNew, update, remove }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
