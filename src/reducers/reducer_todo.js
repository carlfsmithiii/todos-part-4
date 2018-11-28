import {
  ADD_TODO,
  CLEAR_COMPLETED_TODOS,
  REMOVE_TODO,
  COMPLETE_TODO
} from "../actions/index";
import { initialState } from "../components/TodoList";

export default function(state = initialState.todos, action) {
  switch (action.type) {
    case CLEAR_COMPLETED_TODOS:
      const todos = Object.values(state).reduce((accumulator, todo) => {
        if (!todo.completed) {
          accumulator[todo.id] = todo;
        }
        return accumulator;
      }, {});
      return { todos };
    case REMOVE_TODO:
      const previousStateTodos = { ...state };
      delete previousStateTodos[action.payload];

      return previousStateTodos;
    case COMPLETE_TODO:
      const previousState = { ...state };
      const newTodo = { ...previousState[action.payload] };
      newTodo.completed = !newTodo.completed;
      return {
        ...previousState,
        [newTodo.id]: newTodo
      };
    case ADD_TODO:
      const newTodoId =
        state && Object.values(state).length > 0
          ? Object.values(state).reduce((accumulator, todo) =>
              accumulator.id > todo.id ? accumulator.id : todo.id
            ) + 1
          : 1;
      const newTodoo = { ...action.payload, id: newTodoId };
      return {
        ...state,
        [newTodoId]: newTodoo
      };
    default:
      return state;
  }
}
