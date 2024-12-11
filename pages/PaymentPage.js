'use client'
import { useState } from 'react';

export default function PaymentPage() {
  const [amount, setAmount] = useState('');

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    try {
      const isScriptLoaded = await loadRazorpayScript();

      if (!isScriptLoaded) {
        alert('Razorpay SDK failed to load. Are you online?');
        return;
      }

      const response = await fetch('http://localhost:5000/payment/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
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
            const verifyResponse = await fetch('http://localhost:5000/payment/verify', {
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
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Razorpay Payment</h1>
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ margin: '10px', padding: '10px' }}
      />
      <button onClick={handlePayment} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Pay Now
      </button>
    </div>
  );
}
