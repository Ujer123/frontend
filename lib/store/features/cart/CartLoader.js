// CartLoader.js
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCartItems } from './cartSlice'; // Adjust the path as necessary

const CartLoader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadCartFromStorage = () => {
      try {
        const serializedCart = localStorage.getItem('cartItems');
        return serializedCart ? JSON.parse(serializedCart) : [];
      } catch (error) {
        console.error('Could not load cart from storage', error);
        return [];
      }
    };

    const cartItems = loadCartFromStorage();
    dispatch(setCartItems(cartItems)); // Dispatch the action to set cart items in Redux state
  }, [dispatch]);

  return null; // This component does not render anything
};

export default CartLoader;
