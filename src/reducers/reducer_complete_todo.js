import { COMPLETE_TODO } from "../actions/index";
import { initialState } from '../components/TodoList';

export default function(state = initialState, action) {
  switch (action.type) {
    case COMPLETE_TODO:
      const previousStateTodos = { ...state.todos };

      const newTodo = { ...previousStateTodos[action.id] };
      newTodo.completed = !newTodo.completed;
      return {
        ...previousStateTodos,
        newTodo
      };
    default:
      return state;
  }
}
