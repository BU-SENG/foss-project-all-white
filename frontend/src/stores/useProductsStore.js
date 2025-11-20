import { create } from 'zustand';
import api from '../lib/api';

export const useProductsStore = create((set, get) => ({
  products: [],
  myListings: [],
  loading: false,

  fetchProducts: async () => {
    set({ loading: true });
    try {
      const res = await api.get('/items');
      set({ products: res.data, loading: false });
    } catch (error) {
      console.error('Error fetching products:', error);
      // Fallback to mock data if API fails
      setTimeout(() => {
        set({ 
          products: [
            {
              id: 1,
              title: 'Calculus Textbook - Like New',
              description: 'Calculus early transcendentals, barely used. No highlights or markings.',
              price: 45,
              image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=200&fit=crop',
              category: 'textbooks',
              seller: 'Alex Johnson',
              createdAt: new Date('2024-01-15')
            },
            {
              id: 2,
              title: 'MacBook Pro 2020',
              description: '13-inch MacBook Pro, 256GB SSD, 8GB RAM. Great condition.',
              price: 850,
              image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200&fit=crop',
              category: 'electronics',
              seller: 'Sarah Chen',
              createdAt: new Date('2024-01-14')
            }
          ], 
          loading: false 
        });
      }, 1000);
    }
  },

  fetchMyListings: async () => {
    set({ loading: true });
    try {
      const res = await api.get('/items/my-listings');
      set({ myListings: res.data, loading: false });
    } catch (error) {
      console.error('Error fetching my listings:', error);
      set({ loading: false });
    }
  },

  createListing: async (listingData) => {
    
      const res = await api.post('/items', listingData);
      const { myListings, products } = get();
      set({ 
        myListings: [...myListings, res.data],
        products: [res.data, ...products]
      });
      return res.data;
  },

  deleteListing: async (id) => {

      await api.delete(`/items/${id}`);
      const { myListings, products } = get();
      set({ 
        myListings: myListings.filter(item => item.id !== id),
        products: products.filter(item => item.id !== id)
      });

  },

  searchProducts: async (query) => {
    set({ loading: true });
    try {
      const res = await api.get(`/items/search?q=${query}`);
      set({ products: res.data, loading: false });
    } catch (error) {
      console.error('Error searching products:', error);
      set({ loading: false });
    }
  },

  addProduct: (product) => {
    const { products } = get();
    set({ products: [product, ...products] });
  }
}));