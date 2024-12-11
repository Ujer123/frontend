'use client';

import { useSelector } from 'react-redux';
import { useState } from 'react';

function Payment() {
  const cartItems = useSelector((state) => state.cart.items);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isPaying, setIsPaying] = useState(false);

  // Calculate the total order price by combining all product prices
  const totalOrderPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleRazorpayPayment = async () => {
    try {
      const isScriptLoaded = await loadRazorpayScript();

      if (!isScriptLoaded) {
        alert('Razorpay SDK failed to load. Are you online?');
        return;
      }

      const response = await fetch('https://backend-tfcp.onrender.com/payment/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: totalOrderPrice.toFixed(2) }),
      });
      const order = await response.json();

      if (order) {
        const options = {
          key: 'rzp_test_uKu5uCIGgqGkaW', // Replace with your Razorpay key_id
          amount: order.amount,
          currency: order.currency,
          name: 'Your Company',
          description: 'Test Transaction',
          order_id: order.id,
          handler: async (response) => {
            const verifyResponse = await fetch('https://backend-tfcp.onrender.com/payment/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(response),
            });

            const result = await verifyResponse.json();
            if (result.success) {
              alert('Payment Successful');
            } else {
              alert('Payment Verification Failed');
            }
          },
          theme: { color: '#3399cc' },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
    } finally {
      setIsPaying(false); // Stop the loading state
    }
  };

  const handleCOD = () => {
    alert('Order placed successfully with Cash on Delivery!');
    // Implement further COD logic here
  };

  const handlePaymentClick = () => {
    if (paymentMethod === 'online') {
      setIsPaying(true);
      handleRazorpayPayment();
    } else if (paymentMethod === 'cod') {
      handleCOD();
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="payment-page mt-20">
      <h1 className="text-lg font-semibold">Select Payment Method</h1>

      <div className="payment-options mt-4">
        <label className="block">
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            checked={paymentMethod === 'cod'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <span className="ml-2">Cash on Delivery (COD)</span>
        </label>
        <label className="block mt-2">
          <input
            type="radio"
            name="paymentMethod"
            value="online"
            checked={paymentMethod === 'online'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <span className="ml-2">Online Payment</span>
        </label>
      </div>

      <button
        onClick={handlePaymentClick}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
        disabled={isPaying}
      >
        {isPaying ? 'Processing...' : 'Place Order'}
      </button>
    </div>
  );
}

export default Payment;
