"use client"; // Mark this as a client component
import Link from 'next/link';
import { useState } from 'react';
import { FaEnvelope } from "react-icons/fa6";

export default function Login() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Example login logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (email === 'user@example.com' && password === 'password123') {
      console.log('Login successful'); // htmlFor demonstration
      // router.push('/dashboard'); // Uncomment if using router
    } else {
      setError('Invalid email or password'); // Set error message
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle between true and false
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full max-w-sm mx-auto  ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Email Field */}
        <div className="mb-4">
          {/* <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded shadow-sm"
          /> */}
          <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <FaEnvelope/>
            </div>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-6 relative">
          {/* <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'} // Toggle input type based on state
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded shadow-sm"
          /> */}
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
          <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" id="password" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          {/* Toggle Button */}
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 bottom-[-3px] transform -translate-y-1/2 bg-transparent border-none cursor-pointer text-blue-500"
          >
            {showPassword ? 'Hide' : 'Show'} {/* Toggle between Show/Hide */}
          </button>
        </div>

        {/* Forgot Password Link */}
        {/* <div className="flex justify-end mb-6">
          <Link href={'/forgot-password'}>
            <button
              type="button"
              className="text-blue-500 hover:underline">
              Forgot password?
            </button>
          </Link>
        </div> */}

        <div className="flex items-start mb-2">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-black">Remember me</label>
          </div>
          <Link href={'/forgot-password'} className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot password?</Link>
        </div>

        {/* Submit Button */}
        <button type="submit" className="text-white bg-gradient-to-br w-full from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>

        <div className="text-sm font-medium text-black ">
          Not registered? <Link href={'/signup'} className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
        </div>
      </form>
    </div>
  );
}
