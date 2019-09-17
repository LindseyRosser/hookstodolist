import React, { useReducer, useState, useEffect } from "react";
import { filterReducer, todoReducer } from "./reducers";
import { TodoContext } from "./TodoItem";
import { AddTodo } from "./AddTodo";
import { FilterTodos } from "./FilterTodos";
import { TodoList } from "./TodoList";
import {
  AppBar,
  IconButton,
  Icon,
  Container,
  Paper,
  Toolbar,
  Typography
} from "@material-ui/core";
import { useStyles } from "./styles";
import { ThemeProvider } from "@material-ui/styles";
import { themeDay, themeNight } from "./themes";

const ThemeSwitch = props => {
  return (
    <IconButton onClick={props.toggleTheme}>
      <Icon color="secondary">
        {props.theme ? "brightness_2" : "brightness_7"}
      </Icon>
    </IconButton>
  );
};

const App = () => {
  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const initialTheme = () =>
    JSON.parse(localStorage.getItem("dayTheme")) || false;

  const classes = useStyles();

  const [activeFilter, dispatchFilter] = useReducer(filterReducer, "ALL");
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);
  const [isDayTheme, setDayTheme] = useState(initialTheme);

  const toggleTheme = () => {
    setDayTheme(!isDayTheme);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("dayTheme", JSON.stringify(isDayTheme));
  });

  const filteredTodos = todos.filter(todo => {
    return (
      activeFilter === "ALL" ||
      (activeFilter === "COMPLETE" && todo.complete) ||
      (activeFilter === "ACTIVE" && !todo.complete)
    );
  });

  return (
    <ThemeProvider theme={isDayTheme ? themeDay : themeNight}>
      <TodoContext.Provider value={dispatchTodos}>
      <Paper classes={{ root: classes.wide }}>
          <Container maxWidth="lg" classes={{ root: classes.bg }}>
            <Paper classes={{ root: classes.bg }} >
              <AppBar position="static" color="primary">
                <Toolbar classes={{ root: classes.header }}>
                  <Typography variant="h6" color="inherit">
                    Todo App
                  </Typography>
                  <ThemeSwitch theme={isDayTheme} toggleTheme={toggleTheme} />
                </Toolbar>
              </AppBar>
              <AddTodo />
              {todos.length > 0 ? (
                <FilterTodos dispatch={dispatchFilter} />
              ) : null}
              <TodoList todos={filteredTodos} />
            </Paper>
          </Container>
</Paper>
      </TodoContext.Provider>
    </ThemeProvider>
  );
};

export default App;