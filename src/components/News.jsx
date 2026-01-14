import React from 'react';
import newsData from '../data/news-updated.js';

const News = () => {
  return (
    <section id="news" className="news-section">
      <div className="section-container">
        <h2 className="section-title">Recent News</h2>
        <div className="news-content">
          <ul className="news-list">
            {newsData.map((item, index) => (
              <li key={index} className="news-item">
                <span className="news-date">• {item.date}:</span>
                <span className="news-text">{item.text}</span>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="news-link">
                    {item.linkText}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default News;