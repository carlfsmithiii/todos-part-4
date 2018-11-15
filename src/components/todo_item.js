import React from "react";

export default function TodoItem({
  id,
  completed,
  title,
  completeTodo,
  removeTodo
}) {
  return (
    <li className={completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onClick={() => completeTodo(id)}
        />
        <label>{title}</label>
        <button className="destroy" onClick={() => removeTodo(id)} />
      </div>
    </li>
  );
}
