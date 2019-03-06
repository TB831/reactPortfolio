import React from 'react';

const Projects = () => {
  return (
    <div className="container">
      <div className="row" style={{padding: '20px'}}>
        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img src='https://firebase.google.com/images/brand-guidelines/logo-vertical.png' alt="me"/>
            </div>
            <div className="card-content center">
              <h4>Firebase Project Manager</h4>
              <p>Simple project management application that is built with React, Redux, and Firebase. 
                Application has authentication to allow users to login and create accounts. 
                Users can create projects with title and add information about their project. 
                Notifications area to show new users and new projects added. Project deployed with Google hosting.</p>
            </div>
            <div className="card-action center">
              <a href="https://github.com/TB831/FirebaseProjectManger">Repository</a>
              <a href="https://fir-projectmanager.firebaseapp.com/">Deployment</a>
            </div>
          </div>
        </div>
        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Unsplash.svg/2000px-Logo_of_Unsplash.svg.png' alt="me"/>
            </div>
            <div className="card-content center">
              <h4>React Image Search</h4>
              <p>Image searching application. With the search bar, user can checkout pictures or find high quality res images from Unsplash. 
                Once search is complete user is returned 10 tiles with images and their respected description. 
                This application was built using React and uses the Unsplash API to retrieve free high res photos.</p>
            </div>
            <div className="card-action center">
              <a href="https://github.com/TB831/reactCars">Repository</a>
              <a href="https://reactunsplash.herokuapp.com/">Deployment</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Projects;