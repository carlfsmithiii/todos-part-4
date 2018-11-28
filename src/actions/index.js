import {
  COMPLETE_TODO,
  REMOVE_TODO,
  ADD_TODO,
  CLEAR_COMPLETED_TODOS,
  SET_FILTER
} from "../constants/index";

export function completeTodo(id) {
  return {
    type: COMPLETE_TODO,
    payload: id
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: id
  };
}

export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: {
      userId: 1,
      title: text,
      completed: false
    }
  };
}

export function clearCompletedTodos() {
  return {
    type: CLEAR_COMPLETED_TODOS
  };
}

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: filter
  };
}
