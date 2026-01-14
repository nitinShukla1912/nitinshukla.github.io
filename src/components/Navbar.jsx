import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-name">
          <h1>Nitin Shukla <span className="beta-badge">Beta</span></h1>
        </div>
        <div className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#news">NEWS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#patents">PATENTS</a>
          <a href="#publications">PUBLICATIONS</a>
          <a href="#contact">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;