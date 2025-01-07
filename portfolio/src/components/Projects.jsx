import React from 'react';
import project1 from '../assets/placeholder.png';
import project2 from '../assets/placeholder.png';
import project3 from '../assets/placeholder.png';
const Projects = () => {
    const projectList = [
      { name: "Video Conference Tool", description: "Prototyped a tool for ESL users.", image: project1 },
      { name: "Petbacker App", description: "Redesigned the user flow for a pet service app.", image: project2 },
      { name: "Health Monitoring App", description: "Designed the interface for a health monitoring app.", image: project3 },
    ];
  
    return (
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-cards">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.name} className="project-image" />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  

export default Projects;
