import React from 'react';

function Projects() {
  const projects = [
    {
      id: 'netlify-todolist',
      name: 'Todo List App',
      description: 'A modern and responsive todo list application for managing daily tasks efficiently',
      homepage: 'https://todolist-ugbadavid.netlify.app',
      language: 'JavaScript',
      technologies: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
      stargazers_count: 0,
      fork: false
    },
    {
      id: 'netlify-store-menu',
      name: 'Store Menu App',
      description: 'An interactive store menu application for browsing and managing product catalogs',
      homepage: 'https://david-store-menu-app.netlify.app',
      language: 'JavaScript',
      technologies: ['React', 'React Router', 'TheMealDB API', 'CSS3'],
      stargazers_count: 0,
      fork: false
    },
    {
      id: 'netlify-ecommerce',
      name: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with shopping cart and product management',
      homepage: 'https://ecommerce-davidugba.netlify.app',
      language: 'JavaScript',
      technologies: ['React', 'Context API', 'React Router', 'CSS3'],
      stargazers_count: 0,
      fork: false
    }
  ];

  return (
    <section id="projects" className="projects-modern">
      <div className="container">
        <div className="projects-header-modern">
          <span className="section-tag">Portfolio</span>
          <h2>My Projects</h2>
          <p className="section-subtitle">Innovative solutions built with modern technologies</p>
        </div>
        <div className="projects-grid-modern">
          {projects.map((project, index) => {
            // Custom icons for each project
            const getProjectIcon = () => {
              if (project.id === 'netlify-todolist') {
                return (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                );
              } else if (project.id === 'netlify-ecommerce') {
                return (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                );
              } else if (project.id === 'netlify-store-menu') {
                return (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                  </svg>
                );
              }
              return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z"/>
                </svg>
              );
            };

            return (
            <div key={project.id} className="project-card-modern" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card-header">
                <div className="project-icon">
                  {getProjectIcon()}
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
                  {project.technologies && project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
                <div className="card-links">
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
                      view project
                    </a>
                  )}
                </div>
              </div>
            </div>
            );
          })}
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
