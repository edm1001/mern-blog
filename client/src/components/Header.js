import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Header() {
  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  // function to log out
  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }
  const username = userInfo?.username;

  return (
    <header className="mt-7">
      <Link to="/" className="logo">
        <h1 className="text-blue-400 text-5xl pl-1 font-bold" >
        Blog App
        </h1>
      </Link>
      <nav className="mr-3">
      <Link to="/supplements"> <button>Supplements</button></Link>
        <Link to="/equipment"> Equipment</Link>
        {/* add routes to product and supplement page */}
        {username && (
          <>
            {/* if logged in */}
            {/* add username */}
            <Link to="/create">
              <button className="border border-gray-400 hover:bg-gray-400 hover:text-white text-gray-500 font-bold py-2 px-4 rounded-md">
                Create Post!
              </button>
            </Link>
            <a href="/"
              className="border border-gray-400 hover:bg-gray-400 hover:text-white text-gray-500 font-bold py-2 px-4 rounded-md"
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
              <button className="border border-gray-400 hover:bg-gray-400 hover:text-white text-gray-500 font-bold py-2 px-4 rounded-md">
                Log In
              </button>
            </Link>
            <Link to="/register">
              <button className="border border-gray-400 hover:bg-gray-400 hover:text-white text-gray-500 font-bold py-2 px-4 rounded-md">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
