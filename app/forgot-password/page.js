"use client"; // Mark as Client Component

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('A password reset link has been sent to your email.');
  };

  // Effect to handle mouse events for opening and closing the sidebar
  useEffect(() => {
    const handleMouseEnter = (event) => {
      if (event.clientX < 50) { // Adjust the threshold as needed
        setSidebarOpen(true);
        setShowHint(false); // Hide hint when opening sidebar
      } else {
        setShowHint(true); // Show hint when mouse is near left side
      }
    };

    const handleMouseLeave = (event) => {
      if (event.clientX > 200) { // Ensure the sidebar closes when mouse leaves
        setSidebarOpen(false);
        setShowHint(false); // Hide hint when mouse leaves
      }
    };

    document.addEventListener('mousemove', handleMouseEnter);
    document.addEventListener('mousemove', handleMouseLeave);

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseEnter);
      document.removeEventListener('mousemove', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-purple-700 text-white transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-2xl font-bold font-serif">Daniyal</h2>
          <p className="cursive mr-16 mt-9">perfumes</p>
        </div>

        <nav className="mt-10">
          <ul>
            <li className="px-4 py-2 hover:bg-purple-600 font-bold">
              <Link href="/">Home</Link>
            </li>
            <li className="px-4 py-2 hover:bg-purple-600 font-bold">
              <Link href="/about">About</Link>
            </li>
            <li className="px-4 py-2 hover:bg-purple-600 font-bold">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="px-4 py-2 hover:bg-purple-600 font-bold">
              <Link href="/blogs">Blog</Link>
            </li>
            <li className="px-4 py-2 hover:bg-purple-600 font-bold">Our Products</li>
            <li className="px-4 py-2 hover:bg-purple-600 font-bold">
              <Link href="/signup">Signup</Link>
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <button
          onClick={() => {
            // Add your logout logic here
            console.log('Logged out');
          }}
          className="w-full text-red-500 hover:bg-red-600 hover:text-white font-bold py-2 mt-4 rounded-lg transition duration-300"
        >
          Logout
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Hint for opening the sidebar */}
        {showHint && (
          <div className="absolute top-20 left-0 transform -translate-x-full bg-white text-black p-2 rounded shadow-lg">
            Hover near the left edge to open the menu!
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg w-full max-w-md shadow-lg"
          style={{
            boxShadow: '0 4px 16px rgba(128, 90, 213, 0.4)', // Purple shadow
          }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
          {message && <p className="text-green-500 mb-4">{message}</p>}
          <label
            htmlFor="email-address-icon"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="name@flowbite.com"
            />
          </div>

          <button
            type="submit"
            className="text-white bg-gradient-to-br w-full from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-7"
          >
            Send Reset Link
          </button>
          <div className="flex justify-end mb-6">
            <Link href={'/login'}>
              <button
                type="button"
                className="ms-auto text-sm text-blue-700 hover:underline mt-7"
              >
                Back To Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
