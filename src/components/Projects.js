import React from 'react';
import { Spring } from 'react-spring/renderprops';

const Projects = (props) => {
  const projects = props.projects;
  return (
    <Spring from={{ opacity:0, marginRight: -500 }} to={{ opacity:1, marginRight: 0 }}>
      { props => (
          <div style={props}>
            <div className="row">
              {renderProjects(projects)}
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
      <div className="col s12 m4 l4">
        {/* <div className="card z-depth-3">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={project.projectImage} alt={project.imageAlt}/>
          </div>
          <div className="card-action center">
            <p className="card-title activator grey-text text-darken-4">{project.title}</p>
            {renderProjectLinks(project.repository, project.deployment)}
          </div>
          <div className="card-reveal center">
            <span className="card-title grey-text text-dark4">
              {project.title}
              <i className="material-icons right">x</i>
            </span>
            <p className="center">{project.description}</p>
          </div>
        </div> */}

        <div className="card horizontal z-depth-3">
          <div className="card-image waves-effect waves-block waves-light">
            <img src={project.projectImage} className="activator" alt={project.imageAlt} />
          </div>
          <div className="card-stacked center">
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{project.title}</span>
            </div>
            <div className="card-action center">
              {renderProjectLinks(project.repository, project.deployment)}
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-dark4">{project.title}<i className="material-icons right">close</i></span>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    )
  });
}

const renderProjectLinks = (repo, deploy) => {
  return deploy == null ? <a href={repo}>Repository</a> : <div><a href={repo}>Repository</a><a href={deploy}>Deployment</a></div>
}
 
export default Projects;