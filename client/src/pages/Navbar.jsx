import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="ml-5 mt-2 flex items-center">
  <Link to="/" className="text-yellow-500 text-3xl font-bold">Yoga</Link>
  <div className="ml-5">
    <Link to="/" className="text-white ml-5">Contact Us</Link>
  </div>
  <div className="ml-5">
    <Link to="/" className="text-white ml-5">About Us</Link>
  </div>
</div>
  )
}

export default Navbar
