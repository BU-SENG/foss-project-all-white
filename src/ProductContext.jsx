import React, { createContext, useState, useContext } from 'react';
import { products as initialData } from './data'; // Import your starting data

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // This state holds ALL items (Active + Sold + Newly Added)
  const [products, setProducts] = useState(initialData);

  // Function to add a new item
  const addProduct = (newItem) => {
    setProducts((prevProducts) => [newItem, ...prevProducts]);
  };

  // Function to update item status (Active/Sold)
  const toggleProductStatus = (id) => {
    setProducts((prev) => prev.map(item => 
      item.id === id 
        ? { ...item, status: item.status === 'Active' ? 'Sold' : 'Active' } 
        : item
    ));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, toggleProductStatus }}>
      {children}
    </ProductContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => useContext(ProductContext);