'use client';
import Image from 'next/image';
import Link from 'next/link';
import { addToCart, increaseQuantity, decreaseQuantity } from '@/lib/store/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import React, { useEffect, useState } from 'react';

// Main ProductCard Component
export default function ProductCard({ product }) {
  const dispatch = useAppDispatch(); // Get the dispatch function from the store
  const cartItems = useAppSelector((state) => state.cart.items);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true once the component is mounted on the client
  }, []);

  // Ensure rendering only after client-side hydration
  if (!isClient) return null;

  const cartItem = cartItems.find((item) => item.id === product.id); // Check if the product is in the cart

  const handleIncrease = () => dispatch(increaseQuantity(product.id));
  const handleDecrease = () => dispatch(decreaseQuantity(product.id));
  const handleAddToCart = () => {
    console.log('Added to cart:', product);
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 min-w-[250px] min-h-52">
      <ProductImage product={product} />
      <div className="px-5 pb-5">
        <ProductDetails product={product} />
        <CartActions cartItem={cartItem} onIncrease={handleIncrease} onDecrease={handleDecrease} onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
}

// Product Image Component
const ProductImage = ({ product }) => (
  <Link href={`/product/${product.id}`}>
    <Image
      src={product.image_url || '/images/placeholder-image.jpg'} // Use a placeholder if image_url is empty
      alt={product.title}
      width={320}
      height={208}
      className="rounded-t-lg max-w-full h-auto"
      style={{ width: 'auto', height: 'auto' }}
      priority
    />
  </Link>
);

// Product Details Component
const ProductDetails = ({ product }) => (
  <a href="#">
    <h5 className="text-xl overflow-x-hidden font-semibold tracking-tight text-gray-900">
      {product.title}
    </h5>
    <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white mt-4">
      ₹{product.price}
    </p>
  </a>
);

// Cart Actions Component
const CartActions = ({ cartItem, onIncrease, onDecrease, onAddToCart }) => (
  <div className="mt-4 flex items-center justify-between gap-4">
    {cartItem ? (
      <div className="flex items-center space-x-2">
        <button onClick={onDecrease} className="bg-gray-200 px-2 py-1 rounded" aria-label="Decrease quantity">
          -
        </button>
        <span>{cartItem.quantity}</span>
        <button onClick={onIncrease} className="bg-gray-200 px-2 py-1 rounded" aria-label="Increase quantity">
          +
        </button>
      </div>
    ) : (
      <AddToCartButton onAddToCart={onAddToCart} />
    )}
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