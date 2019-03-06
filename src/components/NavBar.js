import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul id="nav-mobile" className="sidenav sidenav-fixed blue">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/projects">Projects</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  );
}
 
export default NavBar;