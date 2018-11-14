import React, { Component } from "react";

import Header from "./header";
import TodoList from "./todo_list";

export default class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <Header />
        <TodoList />
      </section>
    );
  }
}
