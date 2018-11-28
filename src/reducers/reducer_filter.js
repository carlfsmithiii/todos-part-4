import { SET_FILTER } from '../actions/index';
import { initialState } from '../components/TodoList';

export default function(state = initialState.filter , action) {
    switch(action.type) {
        case SET_FILTER:
            return action.payload;
        default:
            return state;
    }
}