import React from "react";
import { TodoItem } from "./TodoItem";
import List from "@material-ui/core/List";
import { useStyles } from "./styles";

export const TodoList = ({ todos }) => {
  const classes = useStyles();
  return (
<List classes={{
    root: classes.bg
  }}>
    {todos.map(todo => (
        
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </List>
)};
