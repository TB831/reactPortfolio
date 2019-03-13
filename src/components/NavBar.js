import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper red">
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <div className="container">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Technology</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <ul className="right hide-on-med-and-down">
              <li><a href="https://github.com/tb831"><img src="https://img.icons8.com/ios-glyphs/60/000000/github.png"></img></a></li>
              <li><a href="https://linkedin.com/in/tb831"><img src="https://img.icons8.com/material/60/000000/linkedin.png"></img></a></li>
            </ul>
          </div>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Technology</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="https://github.com/tb831"><img src="https://img.icons8.com/ios-glyphs/60/000000/github.png"></img></a></li>
        <li><a href="https://linkedin.com/in/tb831"><img src="https://img.icons8.com/material/60/000000/linkedin.png"></img></a></li>
      </ul>
    </div>
  );
}
 
export default NavBar;