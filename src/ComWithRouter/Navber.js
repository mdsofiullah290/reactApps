import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './App.css'

const Navber = () => {
  return (
    <div>
        <nav>
            {/* <Link to="/home" className='nav-link'>Home</Link>
            <Link to="/contact" className='nav-link'>Contact</Link>
            <Link to="/blogs" className='nav-link'>Blogs</Link> */}


           <NavLink to="/home" className='nav-link'>Home</NavLink>
            <NavLink to="/contact" className='nav-link'>Contact</NavLink>
            <NavLink to="/blogs" className='nav-link'>Blogs</NavLink>
        </nav>
      
    </div>
  )
}

export default Navber;
