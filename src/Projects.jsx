import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/davidugba/repos?sort=updated&per_page=6');
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch projects');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="projects-modern">
        <div className="container">
          <div className="projects-header-modern">
            <span className="section-tag">Portfolio</span>
            <h2>My Projects</h2>
            <p className="section-subtitle">Innovative solutions built with modern technologies</p>
          </div>
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading amazing projects...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="projects-modern">
        <div className="container">
          <div className="projects-header-modern">
            <span className="section-tag">Portfolio</span>
            <h2>My Projects</h2>
          </div>
          <div className="error-message">
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects-modern">
      <div className="container">
        <div className="projects-header-modern">
          <span className="section-tag">Portfolio</span>
          <h2>My Projects</h2>
          <p className="section-subtitle">Innovative solutions built with modern technologies</p>
        </div>
        <div className="projects-grid-modern">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card-modern" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card-header">
                <div className="project-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z"/>
                  </svg>
                </div>
                <div className="card-actions">
                  {project.stargazers_count > 0 && (
                    <span className="stars-badge">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                      {project.stargazers_count}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="card-content">
                <h3>{project.name.replace(/-/g, ' ')}</h3>
                <p>{project.description || 'An innovative project showcasing modern development practices'}</p>
              </div>
              
              <div className="card-footer">
                <div className="tech-stack">
                  {project.language && (
                    <span className="tech-badge">{project.language}</span>
                  )}
                  <span className="repo-info">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    {project.fork ? 'Forked' : 'Original'}
                  </span>
                </div>
                
                <div className="card-links">
                  <a 
                    href={project.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="link-github"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                    </svg>
                    View Code
                  </a>
                  {project.homepage && project.homepage.trim() !== '' && (
                    <a 
                      href={project.homepage} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="link-demo"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="projects-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
    </section>
  );
}

export default Projects;
