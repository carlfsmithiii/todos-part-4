import { combineReducers } from 'redux';
import todoReducer from './reducer_todo';
import filterReducer from './reducer_filter';

const rootReducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});

export default rootReducer;