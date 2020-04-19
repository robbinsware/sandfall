import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: [], newTodoTitle: '', allSelected: false };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitNewTodo = this.handleSubmitNewTodo.bind(this);
    this.handleClickRemoveTodo = this.handleClickRemoveTodo.bind(this);
    this.handleCompleteTodo = this.handleCompleteTodo.bind(this);
  }

  componentDidMount() {
    const todosRef = firebase.database().ref('todos');

    todosRef.on('value', snapshot => {
      // deserializes data ?
      // check 
      const itemsObject = snapshot.val();

      // reshape it a bit to make it easier to work with
      const list = Object.keys(itemsObject).map(key => {
        return { firebaseId: key, ...itemsObject[key] };
      });

      this.setState({ todos: list });
    });
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

    if (this.state.newTodoTitle.length !== 0) {
      todos.unshift(todo);
    }

    this.setState({ todos, newTodoTitle: '', allSelected: false });
  }

  handleInputChange(e) {
    this.setState({ newTodoTitle: e.target.value });
  }

  handleClickRemoveTodo(i) {
    const todos = this.state.todos.filter((todo, idx) => {
      return idx !== i;
    });
    this.setState({ todos });
  }

  handleCompleteTodo(e, index) {
    const todos = this.state.todos.map((todo, idx) => {
      if (index === idx) {
        return { id: todo.id, title: todo.title, completed: e.target.checked };
      } else {
        return todo;
      }
    });

    this.setState({ todos });
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
          <h1 className="App-title">Welcome to Sandfall  2</h1>
        </header>
        <div>
          <p className="App-intro">Hello world 2. This is for a test integration with Firebasing </p>

          <h3 style={{ marginBottom: 5 }}>Add a new todo 2:</h3>
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

          {this.state.todos.length > 0 && (
            <hr
              style={{
                width: '50%',
                margin: '35px auto',
                borderStyle: 'dashed'
              }}
            />
          )}
        </div>

        {this.state.todos &&
          this.state.todos.map((todo, idx) => (
            <div key={todo.firebaseId} style={todoStyle}>
              <button onClick={() => this.handleClickRemoveTodo(idx)} style={{ float: 'right', cursor: 'pointer' }}>
                X
              </button>
              <p>{todo.completed ? <del>{todo.title}</del> : <strong>{todo.title}</strong>}</p>
              <span>Complete:</span>
              <input
                type="checkbox"
                onChange={e => this.handleCompleteTodo(e, idx)}
                checked={todo.completed}
                value={todo.completed}
                style={{ cursor: 'pointer', marginLeft: 8 }}
              />
            </div>
          ))}
      </div>
    );
  }
}

export default App;
