"use client"; // Mark this as a client component

import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios'; // Import axios

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); // To handle successful signup

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Example signup logic
    if (username && email && password && phone) {
      try {
        const response = await axios.post('https://backend-tfcp.onrender.com/auth/signup', {
          name: username,
          email,
          password,
          phone,
        });

        // Check response status or data for successful signup
        if (response.data) {
          console.log('Signup successful', response.data);
          setSuccess(true); // Set success to true if signup is successful
        }
      } catch (err) {
        setError('Signup failed. ' + (err.response?.data?.message || err.message)); // Set error message from server
      }
    } else {
      setError('Please fill in all fields');
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full mt-9 max-w-sm mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 dark:text-white px-8 py-3 rounded-lg w-full max-w-md shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">Signup successful! Please log in.</p>}

        {/* Username Field */}
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UserName</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg className="w-4 h-4 text-black dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
              </svg>
            </div>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Bonnie Green"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 dark:text-white text-sm font-medium text-gray-900">Your Email</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg className="w-4 h-4 text-black dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
              </svg>
            </div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>
        </div>

        {/* Phone Field */}
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 dark:text-white text-sm font-medium text-gray-900">Your Phone</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg className="w-4 h-4 text-black dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
            </svg>
            </div>
            <input
              type="phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123456789"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-6 relative">
          <label htmlFor="password" className="block mb-2 dark:text-white text-sm font-medium text-gray-900">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-9 bg-transparent border-none cursor-pointer text-blue-500"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          className="text-white bg-gradient-to-br w-full from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Sign Up
        </button>

        {/* Login Link */}
        <div className="text-sm font-medium text-black pb-3 mt-4 dark:text-white text-center">
          Already have an account? <Link href="/login" className="text-blue-700 hover:underline">Login</Link>
        </div>
      </form>
    </div>
  );
}
