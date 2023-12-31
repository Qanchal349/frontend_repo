/** @format */

import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import CreateOutlined from "@material-ui/icons/AddCircle";
import "./todo.css";
import { createNewTodoAction, getAllTodosAction } from "../redux/actions/todo";
import { useSelector, useDispatch } from "react-redux";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";

const Todo = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  const [keyword, setKeyword] = useState("");
  const [open, setOpen] = useState(false);
  const [todoData, setTodoData] = useState("");

  const dialogToggle = () => {
    setOpen(!open);
  };

  const submitHandler = () => {
    dispatch(createNewTodoAction(todoData));
    dispatch(getAllTodosAction());
    dialogToggle();
  };

  useEffect(() => {
    dispatch(getAllTodosAction(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <div className="todo">
        <h1>Todo List</h1>
        <p>
          Create New Todo <CreateOutlined onClick={dialogToggle} />{" "}
        </p>
        <input
          type="text"
          placeholder="Search todo..."
          value={keyword}
          name={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>

      {todos && (
        <div className="container">
          {todos.length === 0 ? (
            <h1 style={{ textAlign: "center" }}> No Todo Found</h1>
          ) : (
            <>
              {todos.map((todo, i) => (
                <TodoItem todo={todo} key={i} />
              ))}
            </>
          )}
        </div>
      )}

      <Dialog
        aria-labelledby="simple-dialog-title"
        open={open}
        onClose={dialogToggle}
      >
        <DialogTitle>Create New Task</DialogTitle>
        <DialogContent className="submitDialog">
          <textarea
            style={{ fontSize: "large" }}
            cols="50"
            rows="5"
            name="todoData"
            value={todoData}
            onChange={(e) => setTodoData(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogToggle}>Cancel</Button>
          <Button color="primary" onClick={submitHandler}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Todo;
