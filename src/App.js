import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/redux_learn/TodoList'

export default class App extends Component {
  render() {
      return React.createElement('div', null, <TodoList />)
  }
}
