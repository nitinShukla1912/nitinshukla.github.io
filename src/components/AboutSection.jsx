import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <p>
            I am a PhD student at School of Applied Sciences & Technology, Gujarat Technology University. 
            I am also affiliated with GBRC where I am working as Senior Research Fellow. My research 
            interests lie broadly in the field of <strong>Genomics</strong> and <strong>Computational Biology</strong>.
          </p>
          
          <p>
            I leverage omics methods to better understand epidemiology using and integrating various data 
            sources and modalities. My current focus is on <strong>wastewater-based epidemiology</strong>, where I trace 
            viruses circulating in human populations from urban wastewater, decipher viral evolution 
            through mutation profiling and phylodynamics, and develop interfaces for better disease 
            outbreak preparedness.
          </p>
          
          <p>
            I received my Masters and Bachelors degree from Parul University where I graduated with a 
            first class and received a gold medal in MSc degree with distinction, majoring in Biotechnology. 
            My work spans from developing cost-effective HLA typing kits to analyzing complex genomic data 
            for public health applications.
          </p>

          <div className="cv-link">
            <a href="mailto:nitinshukla1912@gmail.com" className="cv-button">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;