import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import logo from './logo.png'


const Header = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="logo" className="logo-img" />
      <NavLink className='but' to="/">Home</NavLink>
      <NavLink className='but' to="movies/popular">Popular</NavLink>
      <NavLink className='but' to="movies/top_rated">Top Rated</NavLink>
      <NavLink className='but' to="movies/upcoming">Upcoming</NavLink>
    </nav >
  )
}

export default Header