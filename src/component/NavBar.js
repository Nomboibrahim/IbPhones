import React from 'react'
import {FaAirFreshener} from "react-icons/fa"
import {Link} from "react-router-dom"


function NavBar() {
  return (
    <div className='header'>
    <FaAirFreshener className="icon"/>
    <h2>IbPhones</h2>
    <ul>
    <li> <Link to = "/">Home</Link></li>
    <li> <Link to = "/about">About Us </Link></li>
    <li> <Link to = "/products">Products</Link></li>
    <li> <Link to = "/Contact Us">Contact Us</Link></li>

    </ul>

    </div>
  )
}

export default NavBar



