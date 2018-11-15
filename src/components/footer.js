import React from "react";

export default function Footer(props) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.todo_count}</strong> item(s) left
      </span>
      {props.todo_count > 0 && <button className="clear-completed">Clear completed</button>}
    </footer>
  );
}
