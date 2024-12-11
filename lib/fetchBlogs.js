// lib/fetchBlogs.js
export async function fetchBlogs() {
    try {
      const response = await fetch('https://backend-tfcp.onrender.com/blogs', {
        cache: 'no-store',
      });
      const blogs = await response.json();
      return blogs;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return []; // Return an empty array on error
    }
  }
  