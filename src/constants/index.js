// import { ALL } from './App';

import Todos from "../todos.json";

export const ALL = "all";
export const ACTIVE = "active";
export const COMPLETED = "completed";

export const COMPLETE_TODO = "COMPLETE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const ADD_TODO = "ADD_TODO";
export const CLEAR_COMPLETED_TODOS = 'CLEAR_COMPLETED_TODOS';
export const SET_FILTER = 'SET_FILTER';

export const initialState = {
  todos: Todos.reduce((accumulator, todo) => {
    accumulator[todo.id] = todo;
    return accumulator;
  }, {}),
  filter: ALL
};
