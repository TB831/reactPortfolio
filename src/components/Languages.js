import React from 'react';

const Languages = () => {
  return (
    <div className="row">
      <h4>Languages</h4>
      <div className="col s4 m2">
        <div className="card z-depth-3">
          <div className="card-image">
            <img src="http://joelcox.io/scripts/logos/es6-logo.png" alt="es6"></img>
            <p className="center"><strong>Es6</strong></p>
          </div>
        </div>
      </div>
      <div className="col s4 m2">
        <div className="card z-depth-3">
          <div className="card-image">
            <img src="http://joelcox.io/scripts/logos/javascript-logo.png" alt="JavaScript"></img>
            <p className="center"><strong>JavaScript</strong></p>
          </div>
        </div>
      </div>
      <div className="col s4 m2">
        <div className="card z-depth-3">
          <div className="card-image">
            <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="TypeScript"></img>
            <p className="center"><strong>TypeScript</strong></p>
          </div>
        </div>
      </div>
      <div className="col s4 m2">
        <div className="card z-depth-3">
          <div className="card-image">
            <img src="https://cdn.iconscout.com/icon/free/png-256/html5-10-569380.png" alt="HTML5"></img>
            <p className="center"><strong>HTML5</strong></p>
          </div>
        </div>
      </div>
      <div className="col s4 m2">
        <div className="card z-depth-3">
          <div className="card-image">
            <img src="http://a1449.phobos.apple.com/us/r30/Purple4/v4/e8/20/fd/e820fded-8a78-06ac-79d0-f1d140346976/mzl.huoealqj.png" alt="Python"></img>
            <p className="center"><strong>Python</strong></p>
          </div>
        </div>
      </div>
      <div className="col s4 m2">
        <div className="card z-depth-3">
          <div className="card-image">
            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png" alt="CSS3"></img>
            <p className="center"><strong>CSS3</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Languages;