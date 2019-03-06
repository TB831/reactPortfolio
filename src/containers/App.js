import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About';
import Technology from '../components/Technology';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/technology" component={Technology} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} /> 
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
