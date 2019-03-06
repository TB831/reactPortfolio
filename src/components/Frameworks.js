import React from 'react';

const Frameworks = () => {
  return (
    <div className="row">
      <h4>Frameworks/Libraries</h4>
      <div className="col s4 m2">
        <div className="card z-depth-3">
          <div className="card-image">
            <img src="https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png" alt="React logo"></img>
            <p className="center"><strong>React</strong></p>
          </div>
        </div>
      </div>
      <div className="col s4 m2">
        <div className="card z-depth-3">
          <div className="card-image">
            <img src="https://avatars0.githubusercontent.com/u/13142323?s=400&v=4" alt="Redux logo"></img>
            <p className="center"><strong>Redux</strong></p>
          </div>
        </div>
      </div>
      <div className="col s4 m2">
        <div className="card z-depth-3">
          <div className="card-image">
            <img src="https://buzz-prod-photos.global.ssl.fastly.net/img/06b9ed56-ced3-4078-bfc8-ca0055a69d61" alt="Express logo"></img>
            <p className="center"><strong>Express</strong></p>
          </div>
        </div>
      </div>
      <div className="col s4 m2">
        <div className="card z-depth-3">
          <div className="card-image">
            <img src="http://dlyapun.com/static/images/django.png" alt="Django logo"></img>
            <p className="center"><strong>Django</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Frameworks;