import React from 'react';
import ClientProductSlider from '@/components/ClientProductSlider';
import Slider from '@/components/Slider';
import ProductsGallery from '@/components/ProductsGallery';
import { getProducts } from '@/lib/getProducts';
import Image from 'next/image';


export default async function Home() {


    const products = await getProducts();
  
  return (
    <>
    <Slider/>
    <ClientProductSlider products={products} />
    <ProductsGallery/>
    </>
  );

}