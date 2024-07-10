import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { title: 'Project 1', description: 'Short description', details: 'Detailed description of Project 1' },
    { title: 'Project 2', description: 'Short description', details: 'Detailed description of Project 2' },
    // Add more projects as needed
  ];

  const handleProjectClick = (index) => {
    setSelectedProject(projects[index]);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project" onClick={() => handleProjectClick(index)}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.details}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
