import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">

        <Link href="/" className="logo">
          Blog<span className="logo-accent">App</span>
        </Link>

        <nav className="nav">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/" className="nav-link">Blogs</Link>
        </nav>

        <Link href="/" className="header-btn">
          Get Started
        </Link>

      </div>
    </header>
  );
}