import ProductCard from '@/components/ProductCard'; // Import the client component
// import Link from 'next/link';
import { getProducts } from '@/lib/getProducts';


export default async function Products() {

  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 mt-20">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 whitespace-nowrap ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} /> // Use Client Component here
      ))}
    </div>
      </div>
  );
}
