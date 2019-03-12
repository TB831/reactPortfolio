const resumeInfo = {
  projects : [
    {
      title: 'Firebase Project Manager',
      description: 'Simple project management application that is built with React, Redux, and Firebase. The Application has authentication to allow users to login and create accounts. Users can create projects with title and add information about their project. ',
      deployment: 'https://fir-projectmanager.firebaseapp.com/',
      repository: 'https://github.com/TB831/FirebaseProjectManger',
      projectImage: 'https://firebase.google.com/images/brand-guidelines/logo-vertical.png',
      imageAlt: 'firebase logo'
    },
    {
      title: 'React Image Search', 
      description: 'Image searching application. With the search bar, user can checkout pictures or find high quality res images from Unsplash. Once search is complete user is returned 10 tiles with images and their respected description. This application was built using React and uses the Unsplash API to retrieve free high res photos', 
      deployment: 'https://reactunsplash.herokuapp.com/', 
      repository: 'https://github.com/TB831/reactCar/', 
      projectImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Unsplash.svg/2000px-Logo_of_Unsplash.svg.png', 
      imageAlt: 'camera'
    },
    {
      title: 'Vue ToDo App', 
      description: 'Front-End web application built using Vue. The application is centered around a simple "ToDo" list that allows the user to create and delete tasks. Application already comes with 3 sample tasks that is retrieved from JSONPlaceholder.typicode.com/ to simulate communication to a backend service.', 
      deployment: null, 
      repository: 'https://github.com/TB831/vueToDoApp', 
      projectImage: 'https://tb831.github.io/images/todo.png', 
      imageAlt: 'Checklist'
    },
    {
      title: 'Concentration Cards', 
      description: 'Front-End web game/application built using React. Game starts with all cards faced down with the objective of matching each card to a similar value. The DeckOfCards API is used to retrieve shuffled card deck data. Game ends when all 52 cards are wiped off the game board. The data retrieved is rendered using React components to display all cards on a gameboard', 
      deployment: 'http://concentrationcards.herokuapp.com/', 
      repository: 'https://github.com/TB831/concentration/', 
      projectImage: 'https://tb831.github.io/images/reactLogo.png', 
      imageAlt: 'React Logo'
    },
    {
      title: 'SmartBrain', 
      description: 'An application that allows users to submit an image; Facial recognition performed to detect any faces within the submmited image.Backend built to provide the application with authentication and send/retrieve data from the client; Server/endpoints constructed with Node.js/Express. Submitted data gets sent from the backend to the Clarifai API and responds with analysis of the image. PostgreSQL database used to store all user’s data', 
      deployment: 'https://smarterbrain.herokuapp.com/', 
      repository: 'https://github.com/TB831/smart-brain/', 
      projectImage: 'https://tb831.github.io/images/brain.png', 
      imageAlt: 'Brain logo'
    },
    {
      title: 'Insurance Chatbot', 
      description: 'With a team designed, built, test, and refine a Amazon Web Services chatbot. Intents are designed around frequently asked questions such as “how can I pay my bill”, “when is my bill due”, and “what is my premium”. Amazon Lamda functions are then used to validate intent and respond appropriately.', 
      deployment: null, 
      repository: 'https://github.com/CSUMB-CST499-S18/cig-customer_service-chatbot-1/tree/ansanchez', 
      projectImage: 'https://tb831.github.io/images/chatbot.jpg', 
      imageAlt: 'Chatbot'
    },
    {
      title: 'Video Game Sales Prediction', 
      description: 'Project centered around learning Machine Learning algorithms and applying them to data. Our goal was to predict video games sales off data collected in the past 15 years. Machine Learning algorithms used Linear Regression, Regression Trees, and Logistic Regression.', 
      deployment: null, 
      repository: 'https://github.com/CSUMB-CST499-S18/cig-customer_service-chatbot-1/tree/ansanchez', 
      projectImage: 'https://tb831.github.io/images/ml.jpg', 
      imageAlt: 'Machine Learning'
    },
  ],
  technology: [
    {title: 'Es6', imageUrl: 'http://joelcox.io/scripts/logos/es6-logo.png', ageAlt: 'es6 logo'},
    {title: 'JavaScript', imageUrl: 'http://joelcox.io/scripts/logos/javascript-logo.png', imageAlt: 'JavaScript logo'},
    {title: 'TypeScript', imageUrl: '', imageAlt: 'TypeScript logo'},
    {title: 'HTML5', imageUrl: '', imageAlt: 'HTML5 logo'},
    {title: 'Python', imageUrl: '', imageAlt: 'Python logo'},
    {title: 'CSS3', imageUrl: '', imageAlt: 'CSS3 logo'},
    {title: 'React', imageUrl: '', imageAlt: 'React logo'},
    {title: 'Redux', imageUrl: '', imageAlt: 'Redux logo'},
    {title: 'Express', imageUrl: '', imageAlt: 'Express logo'},
    {title: 'Django', imageUrl: '', imageAlt: 'Django logo'},
    {title: 'MySQL', imageUrl: '', imageAlt: 'MySQL logo'},
    {title: 'PostgreSQL', imageUrl: '', imageAlt: 'PostgreSQL logo'},
    {title: 'SQLite', imageUrl: '', imageAlt: 'SQLite logo'},
    {title: 'FireStore', imageUrl: '', imageAlt: 'Firestore logo'},
  ],
}

export default resumeInfo;