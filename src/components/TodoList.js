import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { removeTodo, completeTodo } from "../actions/index";
import { ALL } from './App';

import Todos from "../todos.json";
import { ACTIVE } from "../components/App";
import { COMPLETED } from "../components/App";

export const initialState = {
  todos: Todos.reduce((accumulator, todo) => {
    accumulator[todo.id] = todo;
    return accumulator;
  }, {}),
  filter: ALL
};

function TodoList({ todos, completeTodo, removeTodo, displayFilter }) {
  todos = todos ? todos : {};
  let todoList = Object.values(todos);
  if (displayFilter === ACTIVE) {
    todoList = todoList.filter(todo => !todo.completed);
  } else if (displayFilter === COMPLETED) {
    todoList = todoList.filter(todo => todo.completed);
  }

  return (
    <ul className="todo-list">
      {todoList &&
        todoList.map(todo => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            completeTodo={() => completeTodo(todo.id)}
            removeTodo={() => removeTodo(todo.id)}
          />
        ))}
    </ul>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
    displayFilter: ownProps.displayFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    completeTodo: id => {
      dispatch(completeTodo(id));
    },
    removeTodo: id => {
      dispatch(removeTodo(id));
    }
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({completeTodo, removeTodo}, dispatch);
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
