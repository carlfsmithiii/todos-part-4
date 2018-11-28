import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
// import clearCompleted from "../reducers/reducer_clear_completed_todos";
import { clearCompletedTodos } from '../actions/index';

function Footer({ todos, clearCompleted }) {
  const todoCount = todos ? Object.values(todos).length : 0;
  const completedTodoCount = todos
    ? Object.values(todos).reduce(
        (accumulator, todo) => (todo.completed ? ++accumulator : accumulator),
        0
      )
    : 0;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todoCount - completedTodoCount}</strong> item(s) left
      </span>
      <ul className="filters">
        <li>
          <NavLink exact to="/" activeClassName="selected">
            All
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/active" activeClassName="selected">
            Active
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/completed" activeClassName="selected">
            Completed
          </NavLink>
        </li>
      </ul>
      {completedTodoCount > 0 && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => ({
  clearCompleted: () => dispatch(clearCompletedTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
