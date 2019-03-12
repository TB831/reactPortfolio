import React from 'react';

const Technology = (props) => {
  const { languages, frameworks, data } = props.technology;

  return (
    <div className="container">
      <div className="row">
        <h4>Languages</h4>
        {renderLanguages(languages)}
      </div>
      <div className="row">
        <h4>Frameworks</h4>
        {renderFrameworks(frameworks)}
      </div>
    </div>
  );
}

const renderLanguages = (languages) => {
  return languages.map(language => {
    return (
      <div className="col s4 m2">
        <div className="card z-depth-3">
          <div className="card-image">
            <img src={language.imageUrl} alt={language.imageAlt}></img>
            <p className="center"><strong>{language.title}</strong></p>
          </div>
        </div>
      </div>
    )
  })
}

const renderFrameworks = (frameworks) => {
  return frameworks.map(framework => {
    return (
      <div className="col s4 m2">
        <div className="card z-depth-3">
          <div className="card-image">
            <img src={framework.imageUrl} alt={framework.imageAlt}></img>
            <p className="center"><strong>{framework.title}</strong></p>
          </div>
        </div>
      </div>
    )
  })
}
 
export default Technology;