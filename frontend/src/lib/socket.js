import { io } from 'socket.io-client';
import { useProductsStore } from '../stores/useProductsStore';

const socket = io(import.meta.env.VITE_API_URL);

socket.on('newListing', (listing) => {
  useProductsStore.getState().addProduct(listing);
});

socket.on('statusUpdate', (updated) => {
  useProductsStore.setState((state) => ({
    products: state.products.map(p => p.id === updated.id ? updated : p)
  }));
});

export default socket;