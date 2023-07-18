import React from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
    const navStyleHeading=({isActive})=>{
        return {
            textDecoration:isActive?'none':'underline',
            fontWeight:isActive?'bold':'normal'
        }

    }
    return (
        <div>
            <nav className='primary'>
            <NavLink to='/' style={navStyleHeading}>Home</NavLink>
            <NavLink to='/about' style={navStyleHeading}>About</NavLink>
            <NavLink to='/products' style={navStyleHeading}>Products</NavLink>
            </nav>
        </div>
    )
}
