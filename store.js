import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './lib/store/features/cart/cartSlice'; // Adjust the path according to your folder structure

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
