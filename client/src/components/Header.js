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
    <header>
      <Link to='/' className="logo">BlogApp</Link>
      <nav>
        {username && (
          <>
            {/* if logged in */}
            {/* add username */}
            <Link to="/create">
              Create New Post!
            </Link>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logout}>Logout ({username})</button>
          </>
        )}
        {!username && (
          <>
            {/* if logged out */}
            <Link to="/login">Log In</Link>
            <Link to="/register"> Sign Up</Link>
          </>
        )}
      </nav>
    </header>
  );
}
