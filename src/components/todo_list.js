import React from 'react'
import TodoItem from './todo_item';

export default function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.todos && props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          id={todo.id}
          completeTodo={props.handleCompleteTodoClick}
          removeTodo={props.handleRemoveTodoClick}
        />
      ))}
    </ul>
  )
}
