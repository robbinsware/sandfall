import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const todos = [
  { id: 123, title: 'get milk', isSelected: true },
  { id: 223, title: 'get bread', isSelected: true },
  { id: 323, title: 'do laundry', isSelected: true },
  { id: 423, title: 'pick up kids', isSelected: true },
  { id: 523, title: 'drop off kids', isSelected: true },
  { id: 523, title: 'build ridiculous timline program', isSelected: true },
  { id: 623, title: 'build app', isSelected: true },
  { id: 723, title: 'deploy app', isSelected: true },
];

class App extends Component {
  render() {
    const todoStyle = {
      border: '1px dashed #7d7d7d',
      width: 300,
      margin: '10px auto',
      padding: 15,
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Sandfall</h1>
        </header>
        <p className="App-intro">this is for a test integration with Firebase</p>

        <h2>todos:</h2>
        {todos.map(todo => (
          <div style={todoStyle}>
            <input type="checkbox" />
            <span>{todo.title}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
