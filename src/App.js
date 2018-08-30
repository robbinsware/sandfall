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
  { id: 723, title: 'deploy app', isSelected: false }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: [], newTodoTitle: '', allSelected: false };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitNewTodo = this.handleSubmitNewTodo.bind(this);
  }

  componentDidMount() {
    this.setState({ todos });
  }

  handleSubmitNewTodo(e) {
    e.preventDefault();

    const todo = {
      userId: 'browser_user',
      id: this.state.todos.length + 1,
      title: this.state.newTodoTitle,
      completed: false
    };
    const todos = this.state.todos;

    if (this.state.todoTitle.length !== 0) {
      todos.unshift(todo);
    }

    this.setState({ todos, todoTitle: '', allSelected: false });
  }

  handleInputChange(e) {
    this.setState({ newTodoTitle: e.target.value });
  }

  render() {
    const todoStyle = {
      border: '1px dashed #7d7d7d',
      width: 200,
      margin: '10px auto',
      padding: 15
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Sandfall</h1>
        </header>
        <div>
          <p className="App-intro">this is for a test integration with Firebase</p>

          <h3 style={{ marginBottom: 5 }}>Add a new todo:</h3>
          <form onSubmit={this.handleSubmitNewTodo} style={{ display: 'inline-block' }}>
            <input
              type="text"
              style={{ padding: 5 }}
              onChange={this.handleInputChange}
              value={this.state.newTodoTitle}
            />
          </form>
          <button onClick={this.handleSubmitNewTodo} style={{ marginLeft: 5, display: 'inline-block' }}>
            Add
          </button>
        </div>

        <h2>todos:</h2>
        {this.state.todos &&
          this.state.todos.map(todo => (
            <div style={todoStyle} key={todo.id}>
              <input type="checkbox" checked={todo.isSelected} />
              <span style={{ marginLeft: 10 }}>{todo.title}</span>
            </div>
          ))}
      </div>
    );
  }
}

export default App;
