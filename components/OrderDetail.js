'use client'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

function OrderDetail() {
  const cartItems = useSelector(state => state.cart.items);

  // Calculate the total order price by combining all product prices
  const totalOrderPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This will trigger a re-render on the client
  }, []);

  if (!isClient) {
    return null; // Ensure content is not rendered during SSR
  }

  const renderOrderDetails = (price = 0, savings = 0, pickup = 0, tax = 0) => (
    <>
      <div className="space-y-4">
        <div className="space-y-2">
          <OrderDetailItem label="Original price" value={`₹${price.toFixed(2)}`} />
          <OrderDetailItem label="Savings" value={`₹${savings}`} textColor="text-green-600" />
          <OrderDetailItem label="Store Pickup" value={`₹${pickup}`} />
          <OrderDetailItem label="Tax" value={`₹${tax}`} />
        </div>
        <OrderSummary price={price + savings + pickup + tax} />
      </div>
    </>
  );

  return (
    <>
      {cartItems.length === 0 ? (
        <>
          {renderOrderDetails()}
          <button className="flex w-full items-center justify-center rounded-lg bg-gray-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
            Proceed to Checkout
          </button>
        </>
      ) : (
        <>
          {renderOrderDetails(totalOrderPrice)}
          <Link href="/Checkout" className="flex w-full items-center justify-center rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
            Proceed to Checkout
          </Link>
        </>
      )}
    </>
  );
}

const OrderDetailItem = ({ label, value, textColor = "text-gray-900" }) => (
  <dl className="flex items-center justify-between gap-4">
    <dt className={`text-base font-normal text-gray-500 dark:text-gray-400`}>{label}</dt>
    <dd className={`text-base font-medium ${textColor}`}>{value}</dd>
  </dl>
);

const OrderSummary = ({ price }) => (
  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
    <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
    <dd className="text-base font-bold text-gray-900 dark:text-white">₹{price.toFixed(2)}</dd>
  </dl>
);

export default OrderDetail;
