import React from 'react';
import projects from './data/projects'; // Corrected variable name to 'projects' for clarity

const Projects = () => {
  return (
    <div className="container projects my-3" id='projects'>
      <h1>Projects</h1>
      <div className="row d-flex justify-content-center align-content-center">
        {projects.map((project) => (
          <div key={project.id} className="my-3 col-md-4 col-lg-3 col-sm-6 mx-3">
            <div className="card" style={{width: '18rem'}}>
              <img src={project.imageSrc} className="card-img-top" alt={project.name || 'Project'} />
              <div className="card-body">
                <h5 className="card-title">{project.title || 'Card title'}</h5>
                <p className="card-text">{project.description || 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}</p>
                <a href={project.demo || '#'} className="btn btn-primary mx-3">Demo</a>
                <a href={project.source || '#'} className="btn btn-warning">Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;