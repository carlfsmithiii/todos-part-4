import { REMOVE_TODO } from "../actions/index";
import { initialState } from '../components/TodoList';

export default function(state = initialState, action) {
  switch (action.type) {
    case REMOVE_TODO:
      const previousStateTodos = { ...state.todos };
      delete previousStateTodos[action.id];

      return previousStateTodos;
    default:
      return state;
  }
}