import React, { Component } from "react";

import Header from "./header";
import TodoList from "./todo_list";
import Footer from './footer';

import Todos from '../todos.json';

export default class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <Header />
        <TodoList todos={Todos}/>
        <Footer todo_count={1} />
      </section>
    );
  }
}
