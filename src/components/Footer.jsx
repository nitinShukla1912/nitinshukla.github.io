import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="section-container">
        <div className="footer-content">
          <div className="social-links">
            <a 
              href="mailto:nitinshukla1912@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/nitin-shukla-53b218189" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/nitinShukla1912" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub
            </a>
            <a 
              href="https://scholar.google.com/citations?user=5bz5rmAAAAAJ&hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              Google Scholar
            </a>
          </div>
          <p className="footer-text">© 2026 Nitin Shukla</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;