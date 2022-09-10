import React  from 'react'
import { NavLink } from 'react-router-dom'

 
 export default function Navbar() {
   return (
     <div>
        <div className='navbar'>
            <h1 className='success'>SUCCESS IN YOUR EXAMS .</h1>
            <div className='navlink-bar'>
            <NavLink className="routes_nav" to ="home">
              Home
            </NavLink>
            <NavLink className="routes_nav"to ="about">
              About
            </NavLink>
            <NavLink className="routes_nav" to ="contact">
              Contact
            </NavLink>
            </div>
    
        </div>
        
     </div>
   )
 }