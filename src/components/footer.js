import React from "react";
import { NavLink } from 'react-router-dom';

export default function Footer(props) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.todo_count - props.completed_count}</strong> item(s) left
      </span>
      <ul className="filters">
        <li><NavLink to="/" >All</NavLink></li>
        <li><NavLink to="/active" >Active</NavLink></li>
        <li><NavLink to="/completed" >Completed</NavLink></li>
      </ul>
      {props.completed_count > 0 && <button className="clear-completed" onClick={props.clearCompleted}>Clear completed</button>}
    </footer>
  );
}
