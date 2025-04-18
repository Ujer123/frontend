import ProductPageContent from '@/components/ProductPageContent';

export async function getServerSideProps({ params }) {
    const { id } = params;
    
    try {
      const res = await fetch(`https://backend-tfcp.onrender.com/products/${id}`);
      console.log(res);
      
      if (!res.ok) {
        console.error(`API Error: ${res.status} ${await res.text()}`);
        return { 
          props: { product: null }, 
        };
      }
  
      const responseData = await res.json();
        console.log(responseData);
      
      if (!responseData || typeof responseData !== 'object') {
        console.error('Invalid API response:', responseData);
        return { props: { product: null } };
      }
  
      
      const product = responseData.data ? responseData.data : responseData;
        console.log('Product:', product);
  
      return { 
        props: { 
          product: product || null 
        } 
      };
  
    } catch (error) {
      console.error('Fetch Error:', error);
      return { 
        props: { 
          product: null,
          error: error.message 
        } 
      };
    }
  }

export default function Page({ product }) {  
    if (!product) return <div>Product not found</div>;

  return  <ProductPageContent product={product}/>

}
