import React, { useContext, createContext, useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import TextField from "@material-ui/core/TextField";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton/";
import Icon from "@material-ui/core/Icon";
import { useStyles } from './styles';
import './index.css';



export const TodoContext = createContext(null);
  

export const TodoItem = ({ todo }) => {
  const classes = useStyles();
  const dispatch = useContext(TodoContext);
  const [txt, setTxt] = useState(todo.text || "");

  const handleChange = event => {
    setTxt(event.target.value);
  };


  const handleCancel = () => {

    setTxt(todo.text);
  }

  const handleEditSubmit = event => {
    (txt.length === 0) ? handleDelete() : (
      handleEdit()
    );
    event.preventDefault();
  };

  const handleToggle = () =>
    dispatch({
      type: "TOGGLE_TODO",
      id: todo.id
    });

  const handleDelete = () =>
    dispatch({
      type: "DELETE_TODO",
      id: todo.id
    });

  const handleEdit = () =>
    dispatch({
      type: "EDIT_TODO",
      id: todo.id,
      text: txt
    });

  return (
    <ListItem divider={true}>

      <ListItemIcon>
           <Checkbox checked={todo.complete} onChange={handleToggle} />
      </ListItemIcon>
      {todo.editing ? (
        <form className={classes.form}  onSubmit={handleEditSubmit}>
          <TextField value={txt} onChange={handleChange} fullWidth >
             {txt}
          </TextField>
          <IconButton onClick={handleEditSubmit}>

                  <Icon>check</Icon>
            </IconButton>
            <IconButton onClick={handleCancel}>
              <Icon>undo</Icon>
            </IconButton>
        </form>
      ) : (
        <>
          <ListItemText primary={txt} />

          <ListItemSecondaryAction>
            <IconButton onClick={handleEdit}>
                <Icon>edit</Icon>
            </IconButton>
            <IconButton onClick={handleDelete}>
              <Icon>delete</Icon>
               </IconButton>{" "}
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};
