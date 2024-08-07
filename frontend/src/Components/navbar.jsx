import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/CSS/navbar.css';
import logo from '../Assets/Images/log.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <Link to="/">EDUMA</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/Courses">Courses</Link></li>
        <li><Link to="/report">Report</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/mcq-quiz">Quiz</Link></li>
      </ul>
      <div className="auth-links">
        <Link to='/profile'>Profile</Link>
        <Link to="/">Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
