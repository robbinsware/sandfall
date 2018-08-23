import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const todos = [
  { id: 123, title: 'get milk', isSelected: false },
  { id: 223, title: 'get bread', isSelected: false },
  { id: 323, title: 'do laundry', isSelected: false },
  { id: 423, title: 'pick up kids', isSelected: false },
  { id: 523, title: 'drop off kids', isSelected: false },
  { id: 524, title: 'build ridiculous timeline program', isSelected: false },
  { id: 623, title: 'build app', isSelected: false },
  { id: 723, title: 'deploy app', isSelected: false },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: [] };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ todos });
  }

  handleChange(todo) {
    const selectedTodo = this.state.todos.filter(t => t.id === todo.id);

    // from the start of the one we want to remove
    // ...state.slice(0, index);
    // after the deleted one, to the end
    // ...state.slice(index + 1);

    // const newTodos = [];

    // this.setState({ todos: newTodos });
  }

  render() {
    const todoStyle = {
      border: '1px dashed #7d7d7d',
      width: 200,
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
        {this.state.todos &&
          this.state.todos.map(todo => (
            <div style={todoStyle} key={todo.id}>
              <input type="checkbox" checked={todo.isSelected} onChange={e => this.handleChange(todo, e)} />
              <span style={{ marginLeft: 10 }}>{todo.title}</span>
            </div>
          ))}
      </div>
    );
  }
}

export default App;
