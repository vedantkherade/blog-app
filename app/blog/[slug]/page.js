import { getBlogById } from "../../../lib/api";

export default async function BlogPage({ params }) {
  const blog = await getBlogById(params.slug);

  if (!blog) {
    return <div className="container">Blog not found</div>;
  }

  return (
    <div className="blog-detail">

      <div className="blog-image-wrapper">
        <img src={blog.photo_url} alt={blog.title} />
      </div>

      <div className="blog-body">
        <span className="badge">{blog.category}</span>

        <h1>{blog.title}</h1>

        <p className="blog-meta">
          {new Date(blog.created_at).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>

        <p className="blog-desc">{blog.description}</p>

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.content_html }}
        />
      </div>
    </div>
  );
}