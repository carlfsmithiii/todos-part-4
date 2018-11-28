import { initialState } from "../constants/index";
import { SET_FILTER } from "../constants/index";

export default function(state = initialState.filter, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
}
