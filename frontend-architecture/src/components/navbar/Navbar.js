import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaPinterest, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className="container">
          <div className="heading">
            <img src="./arclogo.jpg" alt="Logo" />
          </div>
          <div className="toggle-button m-3" data-bs-toggle="button" onClick={toggleMenu}>
            <FaBars />
          </div>

          <div className={`links ${isOpen ? 'active' : ''}`}>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/Architecture">ARCHITECTURE</Link></li>
            <li><Link to="/interior">INTERIOR</Link></li>
            <li><Link to="/publication">PUBLICATION</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </div>
          
          <div className="sociaillinks">
            <Link to="#"><FaPinterest /></Link>
            <Link to="#"><FaInstagram /></Link>
            <Link to="#"><FaYoutube /></Link>
          </div>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
