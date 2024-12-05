import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Header() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const username = userInfo?.username;

  // Function to log out
  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  return (
    <header className="bg-gray-800 py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Logo aligned to the left */}
        <Link to="/" className="logo">
          <h1 className="text-xl font-bold text-white">HeadlineHub</h1>
        </Link>
        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Desktop Navigation aligned to the right */}
        <nav className="hidden md:flex space-x-6 text-white">
          <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md" >Home</Link>
          <Link to="/blog" className="hover:bg-gray-700 px-3 py-2 rounded-md">
            Blog
          </Link>
          <a href="/#about" className="hover:bg-gray-700 px-3 py-2 rounded-md"> About </a>
          {username ? (
            <>
              {/* If logged in */}
              <Link to="/create">
                <button className="hover:bg-gray-700 px-4 py-2 rounded-md text-xs font-bold">
                  Create Post!
                </button>
              </Link>
              <a
                href="/"
                className="hover:bg-gray-700 px-4 py-2 rounded-md text-xs font-bold"
                onClick={logout}
              >
                Logout ({username})
              </a>
            </>
          ) : (
            <>
              {/* If logged out */}
              <Link to="/login">
                <button className="hover:bg-gray-700 px-4 py-2 rounded-md text-xs font-bold">
                  Log In
                </button>
              </Link>
              <Link to="/register">
                <button className="hover:bg-gray-700 px-4 py-2 rounded-md text-xs font-bold">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-4 text-white flex flex-col items-center justify-center">
          <Link
            to="/blog"
            className="block hover:bg-gray-700 px-4 py-2 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          {username ? (
            <>
              {/* If logged in */}
              <Link
                to="/create"
                className="block hover:bg-gray-700 px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Create Post!
              </Link>
              <a
                href="/"
                className="block hover:bg-gray-700 px-4 py-2 rounded-md"
                onClick={(e) => {
                  logout();
                  setIsMenuOpen(false);
                }}
              >
                Logout ({username})
              </a>
            </>
          ) : (
            <>
              {/* If logged out */}
              <Link
                to="/login"
                className="block hover:bg-gray-700 px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="block hover:bg-gray-700 px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
