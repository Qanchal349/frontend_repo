import React, { useEffect, useState } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxIcon from '@material-ui/icons/CheckBox';       
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';       
import "./todoItem.css"
import { useDispatch } from 'react-redux';
import { deleteTodosAction, getAllTodosAction, updateTodoAction } from '../redux/actions/todo';
import { Dialog,DialogActions,DialogContent,DialogTitle,Button } from '@material-ui/core'


const TodoItem = ({todo}) => {

  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [todoData, setTodoData] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)

  const dialogToggle=()=>{
      setOpen(!open)
  }


  const deleteHandler=()=>{
     if( todo ){
        dispatch(deleteTodosAction(todo.id))
     } 
     dispatch(getAllTodosAction())
  }



  const submitHandler=()=>{
      if(todo){
         dispatch(updateTodoAction(todoData,isCompleted,todo.id))
      }
      dialogToggle();
      dispatch(getAllTodosAction())
  }


  const complete=()=>{
    setIsCompleted(!isCompleted)
    if(todo){
      dispatch(updateTodoAction(todoData,true,todo.id))
    }
  }


  useEffect(() => {
      if(todo){
         setTodoData(todo.todo)
         setIsCompleted(todo.isCompleted)
      }
      dispatch(getAllTodosAction())
  }, [dispatch,isCompleted])
  
  
  return (

     <>
      <div className="todoItemContainer">
           {todo && <div className="item">
                 <p  style={{display:"flex",cursor:"pointer"}}> {!todo.isCompleted ? <CheckBoxIcon onClick={complete}/> : <CancelRoundedIcon/>}  {todo.todo}</p>
                 <h6>CreatedAt :  <span>{todo.createdAt.split("T")[0]}</span></h6>
                 <div className="actions">
                    <p onClick={dialogToggle}><EditIcon/></p> 
                    <p onClick={deleteHandler}><DeleteIcon style={{color:"darkred"}}/></p> 
                 </div>
                
            </div>
            }
           
      </div>

      <Dialog
            aria-labelledby='simple-dialog-title'
            open={open} 
            onClose={dialogToggle} 
          >
            <DialogTitle>Update Task</DialogTitle>
            <DialogContent className='submitDialog'>
            <textarea style={{fontSize:"large"}} cols="50" rows="5" name='todoData' value={todoData} onChange={(e)=>setTodoData(e.target.value)} />
           </DialogContent>
            <DialogActions>
                <Button onClick={dialogToggle}>Cancel</Button>
                <Button color='primary' onClick={submitHandler}>Submit</Button>
            </DialogActions>
         </Dialog>
   
      </>
  )
}

export default TodoItem