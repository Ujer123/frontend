// lib/getProducts.js
export async function getBlogs() {
    const res = await fetch(`https://backend-tfcp.onrender.com/blogs`, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    const result = await res.json();
    return Array.isArray(result.data)
      ? result.data.map((product) => ({ ...product, id: product._id }))
      : [];
  }
  