import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Sandfall</h1>
        </header>
        <p className="App-intro">this is for a test integration with Firebase</p>
      </div>
    );
  }
}

export default App;