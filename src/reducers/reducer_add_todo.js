import { ADD_TODO } from "../actions/index";
import { initialState } from "../components/TodoList";

export default function(state = initialState, action) {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: {
          ...state.todos,
          ...action.payload
        }
      };
    default:
      return state;
  }
}
