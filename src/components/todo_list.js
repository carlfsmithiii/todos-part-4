import React, { Component } from "react";
import TodoItem from "./todo_item";
import todos from "../todos.json";

export default class TodoLis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <ul className="todo-list">
        {this.state.todos.map(todo => (
          <TodoItem
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
        ;
      </ul>
    );
  }
}
