import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [username, setUsername] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include'
    }).then(response => {
      response.json().then(userInfo => {
        setUsername(userInfo.username)
      })
    })
  }, [])
  // function to log out
  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST'
      })
      setUsername(null)
  }
  return (
    <header>
    <nav>
      {username && (
       <>
       {/* if logged in */}
        <Link to="/" className='logo'>MyBlog</Link>
        <a onClick={logout}>Logout</a>
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
  )
}

export default Header