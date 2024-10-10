import React from 'react'
import NavBar from './NavBar'
import { Outlet} from 'react-router-dom'
import Footer from './Footer'
import NewsLetter from './NewsLetter';

const Layout = () => {
  return (
    <div className="min-h-screen bg-secondary"> {/* Set your background color here */}
    <NavBar />
    <div className="container mx-auto p-4">
      <Outlet /> {/* This is where the routed content will be displayed */}
      <NewsLetter/>
      <Footer/>
    </div>
  </div>
  )
}

export default Layout