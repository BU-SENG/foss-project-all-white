import React, { createContext, useState, useContext, useEffect, useCallback } from 'react'; 
import { supabase } from './supabaseClient'; 

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); 

  // --- FIX: Suppressing the strict dependency rule for the stable fetch function ---
  // We use useCallback and an empty dependency array to ensure the function reference is stable
  // throughout the component's life, which resolves the linting error.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchProducts = useCallback(async () => {
    const { data, error } = await supabase
      .from('listings')
      .select('id, title, price, category, condition, hall, description, image_url, seller_id, seller_name, status, created_at')
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error('Error fetching listings:', error.message);
    }
    if (data) {
      const typedData = data.map(item => ({...item, id: Number(item.id)}));
      setProducts(typedData); 
    }
  }, []); // Empty array means the function is only created once

  // 1. Initial Data Load and Listener Setup
  useEffect(() => {
    fetchProducts(); 

    const productListener = supabase
      .channel('public:listings')
      .on(
        'postgres_changes', 
        { event: '*', schema: 'public', table: 'listings' },
        () => { 
          fetchProducts(); 
        }
      )
      .subscribe();
    
    return () => {
      supabase.removeChannel(productListener);
    };
  }, [fetchProducts]); // This depends on the stable fetch function

  // --- ADD PRODUCT and TOGGLE STATUS (Remaining logic) ---
  const addProduct = async (newItem) => {
    const { data, error } = await supabase
      .from('listings')
      .insert(newItem)
      .select(); 
      
    if (error) throw error;

    if (data && data.length > 0) {
      setProducts(prev => [data[0], ...prev]);
    }
    return data;
  };

  const toggleProductStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'Active' ? 'Sold' : 'Active';
    
    const { error } = await supabase
      .from('listings')
      .update({ status: newStatus })
      .eq('id', id);

    if (error) throw error;
    
    setProducts(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, toggleProductStatus }}>
      {children}
    </ProductContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => useContext(ProductContext);