import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Header() {

  return (
    <header className="mt-7">
      <Link to="/" className="logo">
        <h1 className="text-blue-400 text-5xl pl-1 font-bold" >
        Blog App
        </h1>
      </Link>
      <nav className="mr-3">
      <Link to="/supplements"> <button>Supplements</button></Link>
        <Link to="/equipment">Equipment</Link>
        <Link to="/blog">Blog</Link>
        {/* add routes to product and supplement page */}

      </nav>
    </header>
  );
}
