import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
