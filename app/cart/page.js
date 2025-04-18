import CartItem from "@/components/CartItem";
import React from "react";
import Link from "next/link";
import OrderDetail from "@/components/OrderDetail";
import Image from "next/image";
import { FaRegHeart, FaCartPlus,FaArrowRightLong } from "react-icons/fa6";
// import Checkout from "@/components/Checkout";


function cart() {
  
    

  return (
    <>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 md:mt-0 mt-10">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    {/* <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2> */}

    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
      <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl space-y-6">

        <CartItem/>
        
        <div className="hidden xl:mt-8 xl:block">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">People also bought</h3>
          <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
            <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <Link href="#" className="overflow-hidden rounded">
                <Image width={50} style={{height: 'auto', width: 'auto'}} height={50} className="mx-auto  dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image"  priority/>
                <Image width={50} style={{height: 'auto', width: 'auto'}} height={50} className="mx-auto hidden  dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" priority/>
              </Link>
              <div>
                <Link href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">iMac 27”</Link>
                <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">This generation has some improvements, including a longer continuous battery life.</p>
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  <span className="line-through"> $399,99 </span>
                </p>
                <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">$299</p>
              </div>
              <div className="mt-6 flex items-center gap-2.5">
                <button data-tooltip-target="favourites-tooltip-1" type="button" className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-sky-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                  <FaRegHeart/>
                </button>
                <div id="favourites-tooltip-1" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Add to favourites
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button type="button" className="inline-flex w-full items-center justify-center rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                  <FaCartPlus className="me-4"/>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>            
      </div>

      <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

          <OrderDetail/>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
            <Link href={'/'} title="" className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 underline hover:no-underline dark:text-sky-500">
              Continue Shopping
              <FaArrowRightLong/>
            </Link>
          </div>
        </div>

        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Do you have a voucher or gift card? </label>
              <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-sky-500 focus:ring-sky-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-sky-500 dark:focus:ring-sky-500" placeholder="" required />
            </div>
            <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Apply Code</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default cart
