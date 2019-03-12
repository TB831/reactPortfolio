import React from 'react';
import { Spring } from 'react-spring/renderprops';

const Projects = (props) => {
  const projects = props.projects;
  return (
    <Spring from={{ opacity:0, marginRight: -500 }} to={{ opacity:1, marginRight: 0 }}>
      { props => (
          <div style={props}>
            <div className="container">
              <div className="row">
                {renderProjects(projects)}
              </div>
            </div>
          </div>
        )
      }
    </Spring>
  );
}

const renderProjects = (projects) => {
  return projects.map(project => {
    return (
      <div className="col s12 m4">
        <div className="card z-depth-3">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={project.projectImage} alt={project.imageAlt}/>
          </div>
          <div className="card-action center">
            <p className="card-title activator grey-text text-darken-4">{project.title}</p>
            <a href={project.repository}>Repository</a>
            <a href={project.deployment}>Deployment</a>
          </div>
          <div className="card-reveal center">
            <span className="card-title grey-text text-dark4">
              {project.title}
              <i className="material-icons right">x</i>
            </span>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    )
  })

}
 
export default Projects;