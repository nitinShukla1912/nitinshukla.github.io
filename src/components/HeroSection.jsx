import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-photo">
            <img 
              src="/images/nitin-profile.png" 
              alt="Nitin Shukla" 
              className="profile-image"
            />
          </div>
          <div className="hero-info">
            <h1 className="hero-name">Nitin Shukla</h1>
            <h2 className="hero-title">
              PhD Student working in wastewater based epidemiology
            </h2>
            <h3 className="hero-affiliation">
              <a href="https://gtu.ac.in/" target="_blank" rel="noopener noreferrer">@GTU</a> and <a href="https://www.gbrc.res.in/" target="_blank" rel="noopener noreferrer">@GBRC</a>
            </h3>
            <p className="hero-position">
              Senior Research Fellow
            </p>
            <p className="hero-location">Gandhinagar, Gujarat, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;