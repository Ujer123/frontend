
import { notFound } from 'next/navigation';
// import Slider from "react-slick"; // react-slick is used for the slider
import { showProducts } from '@/lib/showProduct';
import ProductPageContent from '@/components/ProductPageContent';



export default async function ProductDetail({ params }) {  
  const { id } = params; // Get the product ID from the URL
  console.log("Route Parameter ID:", id);
  const product = await showProducts(id); // Fetch product based on ID
  console.log("Fetched Product:", product);
  
  // If the product is not found, return 404
  if (!product) {
    return notFound();
  }


  

  return (
    <ProductPageContent product={product}/>
  );

}
