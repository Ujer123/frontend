"use client";
import React, { useRef } from 'react';
import ProductCard from './ProductCard';

const ClientProductSlider = ({ products }) => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -330 : 330;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative sm:mt-11">
      <h2 className='text-center font-bold text-3xl'>Our Latest Product</h2>
      <button
        className="absolute top-1/2 left-11 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
        onClick={() => scroll('left')}
      >
        &lt;
      </button>

<div className='container  '>
      <div ref={sliderRef} className="overflow-x-auto whitespace-nowrap scroll-smooth p-4 mx-auto slider-product">
        <div className="flex flex-nowrap md:space-x-4 space-x-20 md:ms-0 ms-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      </div>

      <button
        className="absolute top-1/2 right-7 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
        onClick={() => scroll('right')}
      >
        &gt;
      </button>
    </div>
  );
};

export default ClientProductSlider;
