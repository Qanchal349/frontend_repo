import { createReducer } from "@reduxjs/toolkit";


export const createNewTodoReducer = createReducer({},{

    // create new todo
    createTodoRequest:(state)=>{
          state.loading=true
    },

    createTodoSuccess:(state,action)=>{
         state.loading = false 
         state.todo= action.payload 
    },

    createTodoFail:(state,action)=>{
          state.loading=false;
          state.error = action.payload 
    },

    // update todo
    updateTodoRequest:(state)=>{
        state.loading=true
    },

    updateTodoSuccess:(state,action)=>{
        state.loading = false 
        state.message= action.payload 
    },

    updateTodoFail:(state,action)=>{
     state.loading=false;
     state.error = action.payload 
    },

     // delete todo

    deleteTodoRequest:(state)=>{
        state.loading=true
    },

    deleteTodoSuccess:(state,action)=>{
        state.loading = false 
        state.message= action.payload 
    },

    deleteTodoFail:(state,action)=>{
     state.loading=false;
     state.error = action.payload 
    },



    clearError:(state)=>{
         state.error=null
    },

    clearMessage:(state)=>{
         state.message=null 
    }

})



export const getAllTodosReducer = createReducer({todos:[] },{

    // get all todos 
    getAllTodosRequest:(state)=>{
          state.loading=true
    },

    getAllTodosSuccess:(state,action)=>{
         state.loading = false
         state.todos= action.payload 
    },

    getAllTodosFail:(state,action)=>{
          state.loading=false;
          state.error = action.payload 
    },
     clearError:(state)=>{
         state.error=null
     },

    clearMessage:(state)=>{
         state.message=null 
    }

})