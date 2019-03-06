import React from 'react';

const Data = () => {
  return (
    <div className="row">
      <h4>Data</h4>
      <div className="col s4 m2">
        <div className="card z-depth-3">
          <div className="card-image">
            <img src="https://cdn.freebiesupply.com/logos/large/2x/mysql-5-logo-png-transparent.png" alt="MySQL logo"></img>
            <p className="center"><strong>MySQL</strong></p>
          </div>
        </div>
      </div>
      <div className="col s4 m2">
        <div className="card z-depth-3">
          <div className="card-image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL logo"></img>
            <p className="center"><strong>PostgreSQL</strong></p>
          </div>
        </div>
      </div>
      <div className="col s4 m2">
        <div className="card z-depth-3">
          <div className="card-image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/2000px-Sqlite-square-icon.svg.png" alt="SQLite logo"></img>
            <p className="center"><strong>SQLite</strong></p>
          </div>
        </div>
      </div>
      <div className="col s4 m2">
        <div className="card z-depth-3">
          <div className="card-image">
            <img src="https://cloud.google.com/images/products/logos/svg/firebase-realtime-database.svg" alt="Firestore Logo"></img>
            <p className="center"><strong>Firstore</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Data;