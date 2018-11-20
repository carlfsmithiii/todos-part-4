import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

import Header from "./header";
import TodoList from "./todo_list";
import Footer from "./footer";

import Todos from "../todos.json";

const ALL = 'all'
const ACTIVE = 'active'
const COMPLETED = 'completed'

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
      const todos = Object.values(prevState.todos).reduce(
        (accumulator, todo) => {
          if (!todo.completed) {
            accumulator[todo.id] = todo;
          }
          return accumulator;
        },
        {}
      );

      return { todos };
    });
  };

  getCompletedTodosCount = () => {
    return Object.values(this.state.todos).reduce(
      (accumulator, todo) => (todo.completed ? ++accumulator : accumulator),
      0
    );
  };

  renderTodoListAndFooter = (displayFilter) => {

    let todos = Object.values(this.state.todos);
    if (displayFilter == ACTIVE) {
      todos = todos.filter(todo => !todo.completed)
    } else if (displayFilter == COMPLETED) {
      todos = todos.filter(todo => todo.completed)
    }

    return (
      <React.Fragment>
        <TodoList
          todos={todos}
          handleCompleteTodoClick={this.handleCompleteTodoClick}
          handleRemoveTodoClick={this.handleRemoveTodoClick}
        />
        <Footer
          todo_count={Object.keys(this.state.todos).length}
          completed_count={this.getCompletedTodosCount()}
          clearCompleted={this.handleClearCompletedTodos}
        />
      </React.Fragment>
    );
  };

  render() {
    return (
      <section className="todoapp">
        <Header addTodo={this.handleAddTodo} />
        <Route exact path="/active" render={() => this.renderTodoListAndFooter(ACTIVE)} />
        <Route exact path="/completed" render={() => this.renderTodoListAndFooter(COMPLETED)} />
        <Route path="/" render={() => this.renderTodoListAndFooter(ALL)} /> 
      </section>
    );
  }
}
