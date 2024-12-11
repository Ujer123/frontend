import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/lib/store/features/cart/cartSlice';

// Load cart from localStorage
const loadCartFromStorage = () => {
  if (typeof window !== 'undefined') {
    const serializedCart = localStorage.getItem('cartItems');
    return serializedCart ? JSON.parse(serializedCart) : [];
  }
  return [];
};


// Save cart to localStorage whenever it changes
// const saveCartToStorage = (cart) => {
//   try {
//     const serializedCart = JSON.stringify(cart);
//     localStorage.setItem('cartItems', serializedCart);
//   } catch (error) {
//     console.error('Could not save cart to storage', error);
//   }
// };

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
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
