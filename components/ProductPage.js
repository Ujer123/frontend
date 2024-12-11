import React from 'react';
import { addToCart, increaseQuantity, decreaseQuantity } from '@/lib/store/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';

// Main ProductPage Component
const ProductPage = ({ product }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === product.id);

  // Handle quantity increase
  const handleIncrease = () => {
    dispatch(increaseQuantity(product.id));
  };

  // Handle quantity decrease
  const handleDecrease = () => {
    dispatch(decreaseQuantity(product.id));
  };

  // Handle add to cart
  const handleAddToCart = () => {
    console.log('Added to cart:', product);
    dispatch(addToCart(product));
  };

  return (
    <div className="product-page">
      {cartItem ? (
        <CartQuantityControl
          quantity={cartItem.quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      ) : (
        <AddToCartButton onAddToCart={handleAddToCart} />
      )}
    </div>
  );
};

// Cart Quantity Control Component
const CartQuantityControl = ({ quantity, onIncrease, onDecrease }) => (
  <div className="flex items-center space-x-2">
    <button
      onClick={onDecrease}
      className="bg-gray-200 px-2 py-1 rounded"
      aria-label="Decrease quantity"
    >
      -
    </button>
    <span>{quantity}</span>
    <button
      onClick={onIncrease}
      className="bg-gray-200 px-2 py-1 rounded"
      aria-label="Increase quantity"
    >
      +
    </button>
  </div>
);

// Add to Cart Button Component
const AddToCartButton = ({ onAddToCart }) => (
  <button
    type="button"
    onClick={onAddToCart}
    className="inline-flex items-center rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
    aria-label="Add to cart"
  >
    <svg
      className="-ms-2 me-2 h-5 w-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
      />
    </svg>
    Add to cart
  </button>
);

export default ProductPage;
