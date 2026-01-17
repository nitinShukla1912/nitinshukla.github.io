import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-name">
          <h1>Nitin Shukla <span className="beta-badge">Beta</span></h1>
        </div>

        {/* Hamburger button - visible on mobile */}
        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
        </button>

        {/* Navigation links */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={closeMenu}>ABOUT</a>
          <a href="#news" onClick={closeMenu}>NEWS</a>
          <a href="#projects" onClick={closeMenu}>PROJECTS</a>
          <a href="#patents" onClick={closeMenu}>PATENTS</a>
          <a href="#publications" onClick={closeMenu}>PUBLICATIONS</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;