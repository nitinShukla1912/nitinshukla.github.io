import React, { memo, useMemo } from 'react';
import publicationsData from '../data/publicationsData.js';

// Memoized publication item component
const PublicationItem = memo(({ pub }) => (
  <div className="publication-item">
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
));

PublicationItem.displayName = 'PublicationItem';

const PublicationsSection = () => {
  // Memoize the data to prevent unnecessary re-renders
  const publications = useMemo(() => publicationsData, []);

  return (
    <section id="publications" className="publications-section">
      <div className="section-container">
        <h2 className="section-title">Publications</h2>
        <div className="publications-content">
          {publications.map((pub, index) => (
            <PublicationItem key={index} pub={pub} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(PublicationsSection);
