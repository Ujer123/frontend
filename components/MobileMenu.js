// MobileMenu.js (Client Component)
"use client"; // Mark as Client Component
import React, { useState } from 'react';
import Link from 'next/link';

function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='relative'>
      <button onClick={toggleMenu} className="md:hidden">
        {menuOpen ? 'Close' : 'Menu'}
      </button>
      {menuOpen && (
        <ul className='absolute -left-32 z-50 mt-2 w-40 bg-white shadow-lg rounded-lg md:hidden'>
          <li><Link href={'/'} className='block px-4 py-2 hover:bg-gray-100'>Home</Link></li>
          <li><Link href={'/contact'} className='block px-4 py-2 hover:bg-gray-100'>Contact</Link></li>
          <li><Link href={'/about'} className='block px-4 py-2 hover:bg-gray-100'>About</Link></li>
          <li><Link href={'/Blogs'} className='block px-4 py-2 hover:bg-gray-100'>Blog</Link></li>
          <li><Link href={'/products'} className='block px-4 py-2 hover:bg-gray-100'>Our Products</Link></li>
          <li><Link href={'/signup'} className='block px-4 py-2 hover:bg-gray-100'>Signup</Link></li>
        </ul>
      )}
    </div>
  );
}

export default MobileMenu;
