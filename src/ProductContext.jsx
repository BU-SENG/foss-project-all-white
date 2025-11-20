import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from './supabaseClient'; 

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('listings')
        .select('*, seller_id, seller_name, image_url, price, title, status, category, condition, hall, description, created_at') // Select specific columns
        .order('created_at', { ascending: false });
        
      if (error) {
        console.error('Error fetching listings:', error.message);
      }
      if (data) {
        const typedData = data.map(item => ({...item, id: Number(item.id)}));
        setProducts(typedData);
      }
    };

    fetchProducts();

    const productListener = supabase
      .channel('public:listings')
      .on(
        'postgres_changes', 
        { event: '*', schema: 'public', table: 'listings' },
        // --- FIX HERE: Removed the unused 'payload' argument ---
        () => { 
          fetchProducts(); 
        }
      )
      .subscribe();
    
    return () => {
      supabase.removeChannel(productListener);
    };
  }, []);

  const addProduct = async (newItem) => {
    const itemToInsert = {...newItem, id: undefined, image: undefined }; 
    
    const { data, error } = await supabase
      .from('listings')
      .insert(itemToInsert)
      .select(); 
      
    if (error) throw error;
    return data;
  };

  const toggleProductStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'Active' ? 'Sold' : 'Active';
    
    const { error } = await supabase
      .from('listings')
      .update({ status: newStatus })
      .eq('id', id);

    if (error) throw error;
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, toggleProductStatus }}>
      {children}
    </ProductContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => useContext(ProductContext);