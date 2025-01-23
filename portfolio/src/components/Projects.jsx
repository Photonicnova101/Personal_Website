import React from 'react';
import project1 from '../assets/placeholder.png';
import project2 from '../assets/placeholder.png';
import project3 from '../assets/placeholder.png';
const Projects = () => {
    const projectList = [
      { name: "Stock_trading_backtesting_react_page", 
        description: "Users will be able to select a certain trading strategy and generate real api data on the desired stock name. Users will be able to generate statistics of the results of a strategy users will be able to choose from and see heatmaps as well as other visual analytics", 
        image: project1 },
      { name: "Language Processing Algorithm", description: "Redesigned the user flow for a pet service app.", image: project2 },
      { name: "Heart Attack Data Analysis", description: "data analysis project on a gold star kaggle dataset for Cornell University's INFO 2950 class", image: project3 },
    ];
  
    return (
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-cards">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.name} className="project-image" href="sampautrat.netlify.app" />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  

export default Projects;
