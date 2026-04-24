import Link from "next/link";

export default function Pagination({ currentPage }) {
  const totalPages = 80;

  const getPages = () => {
    const pages = [];

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }


    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  const pages = getPages();

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <Link href={`/?page=${currentPage - 1}`} className="page-btn">
          ← Previous
        </Link>
      )}

      {pages.map((p, i) =>
        p === "..." ? (
          <span key={i} className="dots">...</span>
        ) : (
          <Link
            key={i}
            href={`/?page=${p}`}
            className={`page-number ${currentPage === p ? "active" : ""}`}
          >
            {p}
          </Link>
        )
      )}

      {currentPage < totalPages && (
        <Link href={`/?page=${currentPage + 1}`} className="page-btn">
          Next →
        </Link>
      )}
    </div>
  );
}