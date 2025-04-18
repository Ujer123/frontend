"use client";
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { IoPersonCircle } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { FaEnvelope,FaPhone } from "react-icons/fa6";

export default function Signup() {
  const [show, setShow] = useState('Sign Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter(); 

  const toggleForm = ()=>{
    setShow((prevShow)=> prevShow === 'Sign Up' ? 'Login' : 'Sign Up');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (name && email && password && phone) {
      try {
        const response = await axios.post('https://backend-tfcp.onrender.com/auth/signup', {
          name,
          email,
          password,
          phone,
        });
        if (response.data) {
          console.log('Signup successful', response.data);
          setSuccess(true);
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

        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UserName</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <IoPersonCircle/>
            </div>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Bonnie Green"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 dark:text-white text-sm font-medium text-gray-900">Your Email</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <FaEnvelope/>
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
            <FaPhone/>
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
