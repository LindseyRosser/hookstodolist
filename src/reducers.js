import uuid from "uuid/v4";

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ALL":
      return "ALL";
    case "SHOW_COMPLETE":
      return "COMPLETE";
    case "SHOW_ACTIVE":
      return "ACTIVE";
    default:
      throw new Error();
  }
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });

    case "ADD_TODO":
      return state.concat({
        text: action.text,
        id: uuid(),
        complete: false,
        editing: false
      });

    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.id);

    case "EDIT_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, editing: !todo.editing, text: action.text };
        } else {
          return todo;
        }
      });

    default:
      throw new Error();
  }
};
