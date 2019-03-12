import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About';
import Technology from '../components/Technology';
import resumeInfo from '../resumeInfo';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/technology" render={(props) => <Technology technology={resumeInfo.technology} />} />
            <Route path="/projects" render={(props) => <Projects projects={resumeInfo.projects} />} />
            <Route path="/contact" component={Contact} /> 
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
