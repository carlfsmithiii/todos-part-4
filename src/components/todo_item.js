import React from "react";

export default function TodoItem({ id, completed, title, finishTodo }) {
  return (
    <li className={completed ? "completed" : ""} onClick={() => finishTodo(id)}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} />
        <label>{title}</label>
        <button className="destroy" />
      </div>
    </li>
  );
}
