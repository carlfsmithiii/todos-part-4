import React from "react";

export default function TodoItem({ completed, title }) {
  return (
    <li className={completed ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} />
        <label>{title}</label>
        <button className="destroy" />
      </div>
    </li>
  );
}
