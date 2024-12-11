import React from 'react';
import { Carousel } from "flowbite-react";
import Image from 'next/image';

// Importing images
import Carousel1 from "@/public/images/bannerdesk.png";
import perfumes from "@/public/images/bannermobile.png";

// Reusable Slide Component
const Slide = ({ desktopImage, mobileImage }) => (
  <div className="flex h-full items-center justify-center bg-gray-400">
    {/* Desktop Image */}
    <Image
      src={desktopImage}
      alt="Slide Image"
      className="w-full h-full hidden md:block"
      priority
    />
    {/* Mobile Image */}
    <Image
      src={mobileImage}
      alt="Slide Image"
      className="w-full h-full md:hidden"
    />
  </div>
);

// Main Slider Component
const Slider = () => {
  return (
    <div className="h-72 sm:mt-10 mt-24 sm:h-64 xl:h-[89vh] 2xl:h-98">
      <Carousel>
        {/* Slide 1 */}
        <Slide desktopImage={Carousel1} mobileImage={perfumes} />
        {/* Slide 2 */}
        <Slide desktopImage={Carousel1} mobileImage={perfumes} />
        {/* Slide 3 */}
        <Slide desktopImage={Carousel1} mobileImage={perfumes} />
      </Carousel>
    </div>
  );
};

export default Slider;
