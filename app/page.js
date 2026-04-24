import { getBlogs } from "../lib/api";
import BlogCard from "./components/BlogCard";
import Pagination from "./components/Pagination";

export default async function Home({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  const blogs = await getBlogs(page);

  const isFirstPage = page === 1; 

  const featuredBlogs = blogs.slice(0, 3);
  const remainingBlogs = blogs.slice(3);

  return (
    <div className="container">
      
      {/* HERO */}
      <div className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            Our <span>Blogs</span>
          </h1>
          <p className="hero-subtitle">
            Read useful articles, tutorials, and insights.
          </p>
        </div>
        <div className="hero-right">BLOG</div>
      </div>

      {/* FEATURED */}
      <h2 className="section-title">Featured</h2>

      <div className="featured-grid">
        {featuredBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            isFeatured={true}
            isFirstPage={isFirstPage} 
          />
        ))}
      </div>

      {/* ALL BLOGS */}
      <h2 style={{ marginTop: "30px", marginBottom: "15px" }}>
        All Blogs
      </h2>

      <div className="blog-grid">
        {remainingBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            isFirstPage={isFirstPage} 
          />
        ))}
      </div>

      <Pagination currentPage={page} />
    </div>
  );
}