// lib/getProducts.js
export async function getProducts() {
    const res = await fetch(`https://backend-tfcp.onrender.com/products`, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    const result = await res.json();
    return Array.isArray(result.data)
      ? result.data.map((product) => ({ ...product, id: product._id }))
      : [];
  }
  