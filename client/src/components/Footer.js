import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";

export default function Footer() {
  const { userInfo, setUserInfo } = useContext(UserContext);
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
    <footer className="bg-gray-800 py-6 px-4 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Auth Links */}
                <div className="flex space-x-4">
          {username ? (
            <>
              {/* If logged in */}
              <a
                href="/"
                onClick={logout}
                className="hover:text-gray-400"
              >
                Logout {username}!
              </a>
            </>
          ) : (
            <>
              {/* If logged out */}
              <Link to="/login" className="hover:text-gray-400">
                Log In
              </Link>
              <Link to="/register" className="hover:text-gray-400">
                Sign Up
              </Link>
            </>
          )}
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center md:justify-start space-x-6">
          <Link to="/blog" className="hover:text-gray-400">
            Blog
          </Link>
          <a href="/#about" className="hover:text-gray-400">
            About
          </a>
        </nav>
      </div>
    </footer>
  );
}
