import React, { Component } from "react";

import Header from "./header";
import TodoList from "./todo_list";
import Footer from "./footer";

import Todos from "../todos.json";

export default class App extends Component {
  state = { todos: Todos };

  addTodo = newTodoText => {
    const newTodoId =
      this.state.todos.reduce((accumulator, todo) =>
        accumulator.id > todo.id ? accumulator : todo
      ).id + 1;

    const newTodo = {
      userId: 1,
      id: newTodoId,
      title: newTodoText,
      "completed": false 
    };

    this.setState(prevState => {
      return {
        todos: prevState.todos.concat(newTodo)
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <Header addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
        <Footer todo_count={1} />
      </section>
    );
  }
}
