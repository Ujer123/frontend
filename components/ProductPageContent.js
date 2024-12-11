'use client'
import Image from 'next/image';
import dynamic from "next/dynamic";
import { addToCart, increaseQuantity, decreaseQuantity } from '@/lib/store/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css"; // Slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Slick carousel theme
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { FaRupeeSign } from "react-icons/fa";
const Slider = dynamic(() => import("react-slick"), {
    ssr: false,
    loading: () => <p>Loading slider...</p>,
  });

  export default function ProductPageContent({product}) {


    const dispatch = useAppDispatch(); // Get the dispatch function from the store
  const cartItems = useAppSelector((state) => state.cart.items);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true once the component is mounted on the client
  }, []);

  // Ensure rendering only after client-side hydration
  if (!isClient) return null;

  const cartItem = cartItems.find((item) => item.id === product.id); // Check if the product is in the cart

  const handleIncrease = () => dispatch(increaseQuantity(product.id));
  const handleDecrease = () => dispatch(decreaseQuantity(product.id));
  const handleAddToCart = () => {
    console.log('Added to cart:', product);
    dispatch(addToCart(product));
  };


    const settings = {
        customPaging: function (i) {
          return (
            <a>
              <Image
                src={product.image_url[i] || "/fallback-image.jpg"}
                alt={`Thumbnail-${i}`}
                className="w-16 h-16 object-cover rounded"
              />
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };

  return (
    <div className=" min-h-screen p-8 mt-20">
    <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Side - Images */}
        <div className="flex flex-col items-center md:w-1/3 space-y-4">
        
        { product && product.image_url  ? (
          
            <Slider {...settings}>
              {product.image_url.map((imageUrl, index) => (
                <div key={index}>
                  <Image
          className="w-full h-96 object-contain rounded"
          src={imageUrl || '/images/perfumes.jpeg'}
          alt={`Product-${index}`}
          width={500} // Adjust as needed
          height={500} // Adjust as needed
        />
                </div>
              ))}
            </Slider>
          ) : (
            <p className="text-center text-black">No images available</p>
          )}
        </div>

        {/* Right Side - Product Details */}
        <div className="md:w-2/3 space-y-4">
            <h2 className="text-2xl font-semibold">{product.title}</h2>
            <p className="">The last 2 products</p>
            <div className="flex items-center space-x-2">
                <span className="text-yellow-400">★★★★☆</span>
                <span className="">(245 Reviews)</span>
            </div>
            <div className="text-3xl font-bold mt-4 flex"><FaRupeeSign size={24} className='mt-2'/>{product.price}</div>

            {/* Quantity and Actions */}
            <div className="mt-4 flex items-center space-x-4">
                
            <CartActions cartItem={cartItem} onIncrease={handleIncrease} onDecrease={handleDecrease} onAddToCart={handleAddToCart} />
                <button className="inline-flex items-center rounded-lg border-black border-2 mt-4 px-5 py-2.5 text-sm font-medium ">
                    Add to favorites
                </button>
            </div>

            {/* Color Options */}
            <div className="mt-4">
                <h4 className="text-sm font-semibold">Colour</h4>
                <div className="flex space-x-2 mt-2">
                    {/* {product.colors.map((color, index) => (
                        <button
                            key={index}
                            className="px-4 py-2 bg-gray-700 rounded text-white"
                        >
                            {color}
                        </button>
                    ))} */}
                </div>
            </div>

            {/* SSD Capacity */}
            <div className="mt-4">
                <h4 className="text-sm font-semibold">SSD capacity</h4>
                <div className="flex space-x-2 mt-2">
                    {/* {product.capacities.map((capacity, index) => (
                        <button
                            key={index}
                            className="px-4 py-2 bg-gray-700 rounded text-white"
                        >
                            {capacity}
                        </button>
                    ))} */}
                </div>
            </div>

            {/* Shipping and Pickup Options */}
            <div className="mt-4">
                <p>
                    <span className="font-semibold">Shipping:</span> ${product.shipping}
                </p>
                <p>
                    <span className="font-semibold">Pickup:</span> ${product.pickup}
                </p>
            </div>

            {/* Warranty Options */}
            <div className="mt-4">
                <h4 className="text-sm font-semibold">Add extra warranty</h4>
                <div className="flex space-x-2 mt-2">
                    {/* {product.warrantyOptions.map((option, index) => (
                        <button
                            key={index}
                            className="px-4 py-2 bg-gray-700 rounded text-white"
                        >
                            {option.label} - ${option.price}
                        </button>
                    ))} */}
                </div>
            </div>
        </div>
    </div>

    {/* Product Details Accordion */}
    <Accordion collapseAll>
      <AccordionPanel>
        <AccordionTitle>Product Details</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-400">
          {product.description}
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 dark:text-cyan-500"
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>Is there a Figma file available?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the
            <a href="https://flowbite.com/figma/" className="text-cyan-600  dark:text-cyan-500">
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>What are the differences between Flowbite and Tailwind UI?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600  dark:text-cyan-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600  dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>

    {/* <div className="container mx-auto mt-8">
        <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-lg">Product Details</h3>
            <p className="text-gray-300 mt-2">{product.description}</p>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 mt-4">
            <h3 className="font-semibold text-lg">Specifications</h3>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 mt-4">
            <h3 className="font-semibold text-lg">Warranty</h3>
        </div>
    </div> */}
</div>
  )
}


const CartActions = ({ cartItem, onIncrease, onDecrease, onAddToCart }) => (
    <div className="mt-4 flex items-center justify-between gap-4">
      {cartItem ? (
        <div className="flex items-center space-x-2">
          <button onClick={onDecrease} className="bg-gray-200 px-2 py-1 rounded" aria-label="Decrease quantity">
            -
          </button>
          <span>{cartItem.quantity}</span>
          <button onClick={onIncrease} className="bg-gray-200 px-2 py-1 rounded" aria-label="Increase quantity">
            +
          </button>
        </div>
      ) : (
        <AddToCartButton onAddToCart={onAddToCart} />
      )}
    </div>
  );
  
  // Add to Cart Button Component
  const AddToCartButton = ({ onAddToCart }) => (
    <button
      type="button"
      onClick={onAddToCart}
      className="inline-flex items-center rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
      aria-label="Add to cart"
    >
      <svg
        className="-ms-2 me-2 h-5 w-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
        />
      </svg>
      Add to cart
    </button>
  );