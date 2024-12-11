"use client"; // Mark as Client Component
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';
import CartIcon from './CartIcon';

// Reusable SearchBar Component
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Handle input changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search for:", searchTerm);
  };

  return (
    <div className="flex items-center">
      {/* Search Input */}
      <SearchInput
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* Action Icons */}
      <ActionIcons />
    </div>
  );
};

// Search Input Component
const SearchInput = ({ searchTerm, onSearchChange, onSearchSubmit }) => (
  <form onSubmit={onSearchSubmit} className="flex items-center relative ml-5">
    <input
      type="text"
      value={searchTerm}
      onChange={onSearchChange}
      placeholder="Search..."
      className="border rounded-l-lg py-1 px-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <div className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
      <FaSearch />
    </div>
  </form>
);

// Action Icons Component
const ActionIcons = () => (
  <div className="flex items-center ml-5 space-x-4">
    {/* Cart Icon */}
    <CartIcon />

    {/* Profile Icon */}
    <Link href={'/'}>
      <CgProfile className="text-lg" />
    </Link>
  </div>
);

export default SearchBar;
