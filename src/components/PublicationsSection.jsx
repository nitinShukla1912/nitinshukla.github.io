import React from 'react';
import publicationsData from '../data/publicationsData.js';

const PublicationsSection = () => {
  return (
    <section id="publications" className="publications-section">
      <div className="section-container">
        <h2 className="section-title">Publications</h2>
        <div className="publications-content">
          {publicationsData.map((pub, index) => (
            <div key={index} className="publication-item">
              <p className="publication-authors">{pub.authors}</p>
              <p className="publication-title">
                {pub.link ? (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    "{pub.title}"
                  </a>
                ) : (
                  `"${pub.title}"`
                )}
              </p>
              <p className="publication-venue">
                <em>{pub.journal}</em>, {pub.year}
                {pub.pdf && (
                  <>
                    {" "}
                    <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="pdf-link">
                      PDF
                    </a>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;