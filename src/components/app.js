import React, { Component } from "react";

import Header from "./header";
import TodoList from "./todo_list";
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <Header />
        <TodoList />
        <Footer todo_count={1} />
      </section>
    );
  }
}
