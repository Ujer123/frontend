import React from 'react';
import ClientProductSlider from '@/components/ClientProductSlider';
import Slider from '@/components/Slider';
import { getProducts } from '@/lib/getProducts';
import AboutUs from '@/components/About/AboutUs';


export default async function Home() {


    const products = await getProducts();
  
  return (
    <>
    <Slider/>
    <ClientProductSlider products={products} />
    <AboutUs/>
    </>
  );

}