// pages/Blogs.js
import { fetchBlogs } from '../lib/fetchBlogs';

export async function getServerSideProps() {
  const blogs = await fetchBlogs();
  return {
    props: { blogs },
  };
}

const BlogsPage = ({ blogs }) => {
  return (
    <div>
      <h1>Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
