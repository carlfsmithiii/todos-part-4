import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { clearCompletedTodos, setFilter } from "../actions/index";
import { ACTIVE, ALL, COMPLETED } from '../components/App';

function Footer({ todos, clearCompleted, location, setFilter }) {
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
          <NavLink exact to="/" activeClassName="selected" onClick={() => setFilter(ALL)}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/active" activeClassName="selected" onClick={() => setFilter(ACTIVE)}>
            Active
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/completed" activeClassName="selected" onClick={() => setFilter(COMPLETED)}>
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
  clearCompleted: () => dispatch(clearCompletedTodos()),
  setFilter: filter => dispatch(setFilter(filter))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Footer)
);
