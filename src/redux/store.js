import {configureStore} from '@reduxjs/toolkit' 
import { createNewTodoReducer, getAllTodosReducer } from './reducers/todo';

const store = configureStore({
    reducer:{
      todo:createNewTodoReducer,
      todos:getAllTodosReducer
    }
})


export default store; 