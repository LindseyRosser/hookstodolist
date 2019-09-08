import React, { useState } from 'react';
import './App.css'

function App() {
  const [todoValue, setTodoValue] = useState('');
  const [todos, setTodo] = useState([])

  const handleChange = e => {
    setTodoValue(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();    
    const todo = {
      value: todoValue,
      done: false
    }
    
    if(!todoValue) return;
    setTodo([...todos, todo]);
    document.getElementById('todoValue').value = ''
  }

  const handleDelete = e => {
    const { id } = e.target.parentElement;
    todos.splice(id, 1)
    setTodo([...todos]);
  }

  const handleDone = e => {
    const { id } = e.target.parentElement;
    todos[id].done = !todos[id].done
    setTodo([...todos])
  }

  return (
    <div className="todo-list">
      <h1 className="head"> Todo List (React Hooks)</h1>
      <div className="todos">
        {
          todos && todos.map((todo, i) => (
            <div className="todo-block" key={todo.value} id={i}>
              <button className={todo.done ? 'done' : 'not-done'} onClick={handleDone}>{todo.value}</button>
              <button className="delete-todo" onClick={handleDelete} >x</button>              
            </div>
          ))
        }
      </div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input type="text" id="todoValue" onChange={handleChange}/>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default App;