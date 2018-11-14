import React from 'react'

export default function TodoItem({ id, completed, title }) {
  return (
    <li key={id} className={completed ? "completed" : ""}>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
      />
      <label>{title}</label>
      <button className="destroy" />
    </div>
  </li>
  )
}
