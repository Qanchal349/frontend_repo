import axios from 'axios' 


// create new todo
export const createNewTodoAction = (todo) => async(dispatch)=>{
    
    try {

         dispatch({type:"createTodoRequest"})
         const {data} = await axios.post(`/api/v1/todo`,{todo},{
              headers:{
                 'Content-Type':'application/json'
              }
         })

       dispatch({type:'createTodoSuccess',payload:data.todo})

    } catch (error) { 
         
        dispatch({type:'createTodoFail',payload:error.response.data.error})   
    }

}


// update todo
export const updateTodoAction = (todo,isCompleted,id) => async(dispatch)=>{
    
    try {
         dispatch({type:"updateTodoRequest"})
         const {data} = await axios.put(`/api/v1/todo/${id}`,{todo,isCompleted},{
              headers:{
                 'Content-Type':'application/json'
              }
         })

       dispatch({type:'updateTodoSuccess',payload:data.message})

    } catch (error) { 
         dispatch({type:'updateTodoFail',payload:error.response.data.error})   
    }

}


// get all todos 
export const getAllTodosAction = (keyword='') => async(dispatch)=>{
    
    try {
          
         dispatch({type:"getAllTodosRequest"})
         const {data} = await axios.get(`/api/v1/todo?keyword=${keyword}`)
         dispatch({type:'getAllTodosSuccess',payload:data.todos})

    } catch (error) { 
         
         dispatch({type:'getAllTodosFail',payload:error.response.data.error})   
    }

}


// delete todos 
export const deleteTodosAction = (id) => async(dispatch)=>{
    
    try {
          
         dispatch({type:"deleteTodoRequest"})
         const {data} = await axios.delete(`/api/v1/todo/${id}`)
         dispatch({type:'deleteTodoSuccess',payload:data.message})

    } catch (error) { 
         
         dispatch({type:'deleteTodoFail',payload:error.response.data.error})   
    }

}

