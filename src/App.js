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
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { AddList } from "./AddList";




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

              <AppBar position="fixed" className={classes.appBar}>
                <Toolbar classes={{ root: classes.appBar }}>
                  <Typography position="center" variant="h6" color="inherit">

                    Todo App
               </Typography>

                  <ThemeSwitch theme={isDayTheme} toggleTheme={toggleTheme} />
                </Toolbar>
                <Drawer
                  className={classes.drawer}
                  variant="permanent"
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  anchor="left"
                >
                  <div className={classes.toolbar} />
                  <Divider />
                
                 <List>
                  
                  <List>
                    {['Create New List'].map((text, index) => (
                      <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>      
                                    
                    </List>
                
                  <Divider />
                  <AddList />  
                </Drawer>
              </AppBar>
        <main className={classes.content}>
              <Paper classes={{ root: classes.wide }}>
            <Container maxWidth="md" classes={{ root: classes.content }}>
                  <Paper classes={{ root: classes.bg }} >
              <AddTodo />
              {todos.length > 0 ? (
                <FilterTodos dispatch={dispatchFilter} />
              ) : null}
              <TodoList todos={filteredTodos} />
            </Paper>
          </Container>
</Paper>
</main>
      </TodoContext.Provider>
    </ThemeProvider>
  );
};

export default App;