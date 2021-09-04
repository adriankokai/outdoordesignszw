import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../src/pages/Home'
import Products from './pages/Products';
import About from './pages/About';
import "materialize-css/dist/css/materialize.min.css";

export class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/about' component={About} />
      </Router>
    )
  }
}

export default App
