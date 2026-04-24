import Link from "next/link";

const styles = [
  {
    gradient: "radial-gradient(circle at top right, #75996399, transparent 70%)",
    color: "#759963",
  },
  {
    gradient: "radial-gradient(circle at top right, #38e2b299, transparent 70%)",
    color: "#0f766e",
  },
  {
    gradient: "radial-gradient(circle at top right, #c39e5a99, transparent 70%)",
    color: "#b45309",
  },
  {
    gradient: "radial-gradient(circle at top right, #3586d199, transparent 70%)",
    color: "#2563eb",
  },
  {
    gradient: "radial-gradient(circle at top right, #c9a13e99, transparent 70%)",
    color: "#92400e",
  },
  {
    gradient: "radial-gradient(circle at top right, #858c8599, transparent 70%)",
    color: "#166534",
  },
  {
    gradient: "radial-gradient(circle at top right, #d995d099, transparent 70%)",
    color: "#7e22ce",
  },
  {
    gradient: "radial-gradient(circle at top right, #ad76da99, transparent 70%)",
    color: "#6d28d9",
  },
  {
    gradient: "radial-gradient(circle at top right, #e9c34999, transparent 70%)",
    color: "#ca8a04",
  },
];

export default function BlogCard({ blog, isFeatured, isFirstPage }) {
  const style = styles[(blog.id - 1) % styles.length];

  const gradient = isFirstPage ? style.gradient : "transparent";

  const hoverColor = isFirstPage ? style.color : "#000";

  return (
    <Link href={`/blog/${blog.id}`}>
      <div className="blog-card">
        <div
          className="blog-card-inner"
          style={{
            "--dynamic-gradient": gradient,
            "--title-hover-color": hoverColor,
          }}
        >
          {isFeatured && (
            <span className="featured-label">Featured</span>
          )}

          <img src={blog.photo_url} className="blog-image" />

          <div className="blog-content-box">
            <span className="badge">{blog.category}</span>

            <h3 className="blog-title">
              {blog.title}
            </h3>

            <p className="blog-desc">{blog.description}</p>

            <div className="blog-footer">
              <span>{new Date(blog.created_at).toDateString()}</span>
              <span className="read-more">Read →</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}