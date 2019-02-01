import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router} from 'react-router-dom';
import Header from './component/Header/Header';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
        <Header />
        { routes }
        </div>
      </Router>
    );
  }
}

export default App;
