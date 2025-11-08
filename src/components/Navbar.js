import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
        <li><a href="#features" onClick={toggleMenu}>Features</a></li>
        <li><a href="#options" onClick={toggleMenu}>More Option</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        <div className="nav-actions mobile-actions">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
