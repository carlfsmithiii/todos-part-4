import { SET_FILTER } from '../actions/index';
import { initialState } from '../components/TodoList';

export default function(state = initialState.filter , action) {
    switch(action.type) {
        case SET_FILTER:
            // return {
            //     // ...state,
            //     filter: action.payload
            // };
            return action.payload;
        default:
            return state;
    }
}