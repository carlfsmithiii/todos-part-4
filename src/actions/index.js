export const COMPLETE_TODO = "COMPLETE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const ADD_TODO = "ADD_TODO";
export const CLEAR_COMPLETED_TODOS = 'CLEAR_COMPLETED_TODOS';
export const SET_FILTER = 'SET_FILTER';

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
  }
} 

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: filter
  }
}