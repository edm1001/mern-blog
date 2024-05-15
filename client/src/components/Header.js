import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="mt-7">
      <Link to="/" className="logo">
        <h1 className="text-blue-400 text-5xl pl-1 font-bold">Active Sphere</h1>
      </Link>
      <nav className="mr-3">
        <Link to="/blog">Sponsored Brands</Link>
      </nav>
    </header>
  );
}
