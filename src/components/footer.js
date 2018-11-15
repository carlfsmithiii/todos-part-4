import React from "react";

export default function Footer(props) {
  return (
    <footer className="footer">
      <span class="todo-count">
        <strong>{props.todo_count}</strong> item(s) left
      </span>
      {props.todo_count > 0 && <button class="clear-completed">Clear completed</button>}
    </footer>
  );
}
