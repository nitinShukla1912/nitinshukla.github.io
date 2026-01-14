import React from 'react';
import projectsData from '../data/projects-updated.js';

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-content">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-description">
                {project.description.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
              {project.links && project.links.length > 0 && (
                <div className="project-links">
                  {project.links.map((link, lIndex) => (
                    <a 
                      key={lIndex} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              )}
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;