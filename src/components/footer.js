import React from "react";
import { Link } from 'react-router-dom';

export default function Footer(props) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.todo_count - props.completed_count}</strong> item(s) left
      </span>
      <ul className="filters">
        <li><Link to="/">All</Link></li>
        <li><Link to="/active">Active</Link></li>
        <li><Link to="/completed">Completed</Link></li>
      </ul>
      {props.completed_count > 0 && <button className="clear-completed" onClick={props.clearCompleted}>Clear completed</button>}
    </footer>
  );
}
