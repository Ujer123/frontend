import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/lib/store/features/cart/cartSlice';
import productReducer from '@/lib/store/features/cart/ProductSlice';
import appReducer from './features/appSlice';

// Load cart from localStorage
const loadCartFromStorage = () => {
  if (typeof window !== 'undefined') {
    const serializedCart = localStorage.getItem('cartItems');
    return serializedCart ? JSON.parse(serializedCart) : [];
  }
  return [];
};


export const makeStore = () => {
  const store = configureStore({
    reducer: {
      app: appReducer,
      cart: cartReducer,
      product: productReducer,
    },
    preloadedState: {
      cart: {
        items: loadCartFromStorage(),
      },
    },
  });
  // Subscribe to store changes and save cart to localStorage
  store.subscribe(() => {
    const { items } = store.getState().cart;
    localStorage.setItem('cartItems', JSON.stringify(items));
  });

  return store;
};
