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

  handleCompleteTodoClick = todoId => event => {
    this.setState(prevState => {
      const todos = { ...prevState.todos };
      todos[todoId].completed = !todos[todoId].completed;

      return { todos };
    });
  };

  handleRemoveTodoClick = todoId => event => {
    this.setState(prevState => {
      const todos = { ...prevState.todos };
      delete todos[todoId];

      return { todos };
    });
  };

  handleClearCompletedTodos = () => {
    this.setState(prevState => {
      const todos = Object.values(prevState.todos).reduce((accumulator, todo) => {
        if (!todo.completed) {
          accumulator[todo.id] = todo;
        }
        return accumulator;
      }, {});

      return { todos };

    });
  };

  getCompletedTodosCount = () => {
    return Object.values(this.state.todos).reduce(
      (accumulator, todo) => (todo.completed ? ++accumulator : accumulator),
      0
    );
  };

  render() {
    return (
      <section className="todoapp">
        <Header addTodo={this.handleAddTodo} />
        <TodoList
          todos={Object.values(this.state.todos)}
          handleCompleteTodoClick={this.handleCompleteTodoClick}
          handleRemoveTodoClick={this.handleRemoveTodoClick}
        />
        <Footer
          todo_count={Object.keys(this.state.todos).length}
          completed_count={this.getCompletedTodosCount()}
          clearCompleted={this.handleClearCompletedTodos}
        />
      </section>
    );
  }
}
