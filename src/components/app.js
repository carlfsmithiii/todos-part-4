import React, { Component } from "react";

import Header from "./header";
import TodoList from "./todo_list";
import Footer from "./footer";

import Todos from "../todos.json";

export default class App extends Component {
  state = {
    todos: Todos.reduce((accumulator, todo) => {
      accumulator[todo.id] = todo;
      return accumulator;
    }, {})
  };

  handleAddTodo = newTodoText => {
    const newTodoId =
      Object.values(this.state.todos).reduce((accumulator, todo) =>
        accumulator.id > todo.id ? accumulator : todo
      ).id + 1;

    const newTodo = {
      userId: 1,
      id: newTodoId,
      title: newTodoText,
      completed: false
    };

    this.setState(prevState => {
      return {
        todos: Object.assign(prevState.todos, { [newTodoId]: newTodo })
      };
    });
  };

  handleTodoClick = todoId => {
    this.setState(prevState => {
      const todos = { ...prevState.todos };

      todos[todoId].completed = !todos[todoId].completed;
      return { todos };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <Header addTodo={this.handleAddTodo} />
        <TodoList
          todos={Object.values(this.state.todos)}
          handleTodoClick={this.handleTodoClick}
        />
        <Footer todo_count={1} />
      </section>
    );
  }
}
