import { CLEAR_COMPLETED_TODOS } from "../actions/index";
import {initialState} from '../components/TodoList';

export default function(state = initialState, action) {
  switch (action.type) {
    case CLEAR_COMPLETED_TODOS:
      const todos = Object.values(state).reduce(
        (accumulator, todo) => {
          if (!todo.completed) {
            accumulator[todo.id] = todo;
          }
          return accumulator;
        },
        {}
      );

      return { todos };
    default:
      return state;
  }
}
