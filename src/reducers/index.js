import { combineReducers } from 'redux';
// import RemoveTodo from './reducer_remove_todo';
// import CompleteTodo from './reducer_complete_todo';
// import AddTodo from './reducer_add_todo';
// import { addTodo } from '../actions';
import todoReducer from './reducer_todo';

// const rootReducer = combineReducers({
//     completeTodo: CompleteTodo,
//     removeTodo: RemoveTodo,
//     addTodo: AddTodo,
// });

const rootReducer = combineReducers({
    todos: todoReducer
});

export default rootReducer;