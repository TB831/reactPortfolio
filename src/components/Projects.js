import React from 'react';

const Projects = () => {
  return (
    <div className="container">
      <div className="row" style={{padding: '20px'}}>
        <div className="col s4">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src='https://firebase.google.com/images/brand-guidelines/logo-vertical.png' alt="firebase logo"/>
            </div>
            <div className="card-action center">
              <p className="card-title activator grey-text text-darken-4">Firebase Project Manager</p>
              <a href="https://github.com/TB831/FirebaseProjectManger">Repository</a>
              <a href="https://fir-projectmanager.firebaseapp.com/">Deployment</a>
            </div>
            <div className="card-reveal center">
              <span className="card-title grey-text text-dark4">
                Firebase Project Manager
                <i className="material-icons right">x</i>
              </span>
              <p>Simple project management application that is built with React, Redux, and Firebase. 
                The Application has authentication to allow users to login and create accounts. 
                Users can create projects with title and add information about their project. </p>
            </div>
          </div>
        </div>
        <div className="col s4">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Unsplash.svg/2000px-Logo_of_Unsplash.svg.png' alt="camera"/>
            </div>
            <div className="card-action center">
              <p className="card-title activator grey-text text-darken-4">React Image Search</p>
              <a href="https://github.com/TB831/reactCars">Repository</a>
              <a href="https://reactunsplash.herokuapp.com/">Deployment</a>
            </div>
            <div className="card-reveal center">
            <span className="card-title grey-text text-dark4">
                React Image Search
                <i className="material-icons right">x</i>
              </span>
              <p>Image searching application. With the search bar, user can checkout pictures or find high quality res images from Unsplash. 
                Once search is complete user is returned 10 tiles with images and their respected description. 
                This application was built using React and uses the Unsplash API to retrieve free high res photos.</p>
            </div>
          </div>
        </div>
        <div className="col s4">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src='https://tb831.github.io/images/todo.png' alt="Checklist"/>
            </div>
            <div className="card-action center">
              <p className="card-title activator grey-text text-darken-4">Vue Todo List</p>
              <a href="https://github.com/TB831/vueToDoApp">Repository</a>
            </div>
            <div className="card-reveal center">
              <span className="card-title grey-text text-dark4">
                Vue Todo List
                <i className="material-icons right">x</i>
              </span>
              <p>Front-End web application built using Vue. The application is centered around a simple "ToDo" list that allows the user to create and delete tasks. 
                Application already comes with 3 sample tasks that is retrieved from JSONPlaceholder.typicode.com/ to simulate communication to a backend service.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s4">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src='https://tb831.github.io/images/reactLogo.png' alt="React Logo"/>
            </div>
            <div className="card-action center">
              <p className="card-title activator grey-text text-darken-4">Concentration Cards</p>
              <a href="https://github.com/TB831/concentration">Repository</a>
              <a href="http://concentrationcards.herokuapp.com/">Deployment</a>
            </div>
            <div className="card-reveal center">
            <span className="card-title grey-text text-dark4">
                Concentration Cards
                <i className="material-icons right">x</i>
              </span>
              <p>Front-End web game/application built using React. Game starts with all cards faced down with the objective of matching each card to a similar value. 
                The DeckOfCards API is used to retrieve shuffled card deck data. Game ends when all 52 cards are wiped off the game board. The data retrieved is rendered
                using React components to display all cards on a gameboard</p>
            </div>
          </div>
        </div>
        <div className="col s4">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src='https://tb831.github.io/images/brain.png' alt="Brain logo"/>
            </div>
            <div className="card-action center">
              <p className="card-title activator grey-text text-darken-4">SmartBrain</p>
              <a href="https://github.com/TB831/smart-brain">Repository</a>
              <a href="https://smarterbrain.herokuapp.com/">Deployment</a>
            </div>
            <div className="card-reveal center">
              <span className="card-title grey-text text-dark4">
                SmartBrain
                <i className="material-icons right">x</i>
              </span>
              <p>An application that allows users to submit an image; Facial recognition performed to detect any faces within the submmited image. 
                Backend built to provide the application with authentication and send/retrieve data from the client; Server/endpoints constructed with Node.js/Express.
                Submitted data gets sent from the backend to the Clarifai API and responds with analysis of the image. PostgreSQL database used to store all user’s data; 
              </p>
            </div>
          </div>
        </div>
        <div className="col s4">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src='https://tb831.github.io/images/chatbot.jpg' alt="Chatbot"/>
            </div>
            <div className="card-action center">
              <p className="card-title activator grey-text text-darken-4">Insurance Chatbot</p>
              <a href="https://github.com/CSUMB-CST499-S18/cig-customer_service-chatbot-1/tree/ansanchez">Repository</a>
            </div>
            <div className="card-reveal center">
              <span className="card-title grey-text text-dark4">
                Insurance Chatbot
                <i className="material-icons right">x</i>
              </span>
              <p>With a team designed, built, test, and refine a Amazon Web Services chatbot. Intents are designed around frequently asked questions such as 
                “how can I pay my bill”, “when is my bill due”, and “what is my premium”. Amazon Lamda functions are then used to validate intent and respond appropriately.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s4">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src='https://tb831.github.io/images/ml.jpg' alt="Machine Learning"/>
            </div>
            <div className="card-action center">
              <p className="card-title activator grey-text text-darken-4">Video Game Sales Prediction</p>
              <a href="https://github.com/CSUMB-CST499-S18/cig-customer_service-chatbot-1/tree/ansanchez">Repository</a>
            </div>
            <div className="card-reveal center">
              <span className="card-title grey-text text-dark4">
                Video Game Sales Prediction
                <i className="material-icons right">x</i>
              </span>
              <p>Project centered around learning Machine Learning algorithms and applying them to data. 
                Our goal was to predict video games sales off data collected in the past 15 years. 
                Machine Learning algorithms used Linear Regression, Regression Trees, and Logistic Regression.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Projects;