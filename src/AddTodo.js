import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";

export const AddTodo = () => {
  const dispatch = useContext(TodoContext);
  const classes = useStyles();
  const [text, setText] = useState("");

  const handleSubmit = event => {
    if (text) {
      dispatch({ type: "ADD_TODO", text });
    }
    setText("");
    event.preventDefault();
  };

  const handleChange = event => setText(event.target.value);

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField name="text" label="New Todo" value={text} onChange={handleChange} />
      <Button type="submit" color="secondary" variant="contained">
        Add
      </Button>
    </form>
  );
};