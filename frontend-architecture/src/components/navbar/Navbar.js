import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaPinterest, FaBars } from 'react-icons/fa';
// import { Logincontext } from '../Admin/Logincontext/Adminlogincontext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const { adminlogin, setadminlogin } = useContext(Logincontext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav>
        <div className="container">
          <div className="heading">

            <img style={{ width: "250px", height: "70px" }} src="./logo3.png" alt="Logo" />
          </div>
          <div className="toggle-button m-3" data-bs-toggle="button" onClick={toggleMenu}>
            <FaBars />
          </div>

          <div className={`links ${isOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
            <li><Link to="/about" onClick={closeMenu}>ABOUT</Link></li>
            <li><Link to="/Architecture" onClick={closeMenu}>ARCHITECTURE</Link></li>
            <li><Link to="/interior" onClick={closeMenu}>INTERIOR</Link></li>
            <li><Link to="/publication" onClick={closeMenu}>PUBLICATION</Link></li>
            <li><Link to="/contactcategory" onClick={closeMenu}>CONTACT</Link></li>
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
