import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Header() {
  const {userInfo, setUserInfo} = useContext(UserContext)
    // function to log out
    const username = userInfo?.username;
    function logout() {
      fetch("http://localhost:4000/logout", {
        credentials: "include",
        method: "POST",
      });
      setUserInfo(null);
    }


  return (
    <header className="mt-7">
      <Link to="/" className="logo">
        <h1 className="text-xl pl-1 font-bold text-white">HeadlineHub</h1>
      </Link>
      <nav className="mx-auto text-white">
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="flex flex-row">
      {username && (
      <>
        {/* if logged in */}
        <Link to="/create">
          <button className="hover:bg-gray-700 hover:underline text-white font-bold py-2 px-4 rounded-md text-xs">
            Create Post!
          </button>
        </Link>
        <a href="/"
          className="hover:bg-gray-700 hover:text-underline text-white font-bold py-2 px-4 rounded-md text-xs"
          onClick={logout}
        >
          Logout ({username})
        </a>
      </>
    )}
    {!username && (
      <>
        {/* if logged out */}
        <Link to="/login">
          <button className="hover:bg-gray-700 hover:underline text-white font-bold py-2 px-4 rounded-md text-xs">
            Log In
          </button>
        </Link>
        <Link to="/register">
          <button className="hover:bg-gray-700 hover:underline text-white font-bold py-2 px-4 rounded-md text-xs">
            Sign Up
          </button>
        </Link>
      </>
    )}
      </div>
    </header>
  );
}
