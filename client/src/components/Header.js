import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <Link to="/" className="logo">
      My Blog
    </Link>
    <nav>
      <Link to="/login">Log In</Link>
      <Link to="/register"> Sign Up</Link>
    </nav>
  </header>
  )
}

export default Header