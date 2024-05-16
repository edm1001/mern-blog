import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import About from './About'

const Layout = () => {
  return (
    <main>
        <Header />
        <About/>
        <Outlet />
    </main>
  )
}

export default Layout