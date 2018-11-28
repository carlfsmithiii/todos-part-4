import { combineReducers } from 'redux';
import todoReducer from './reducer_todo';

const rootReducer = combineReducers({
    todos: todoReducer
});

export default rootReducer;