import React, { Component } from 'react';

import Header from './header';
import TodoList from './todo_list';

// import './index.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TodoList />
      </div>
    )
  }
}