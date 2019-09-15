
import React, { useState } from 'react';
import { AddToDoForm } from '../components/AddToDoForm';

export const Main = () => {
    const [todos, setTodos] = useState([
        {
            text: "Clean house",
            isDone: false
        }, {
            text: "Grocery shop",
            isDone: false
        }, {
            text: "Pay bills",
            isDone: false
        },
        {
            text: "Feed dog",
            isDone: false
        }
    ]);
    const addTodo = (text) => {
        setTodos([...todos, { text }]);
    };
    const toggleTodoStatus = (payload) => {
        const { status, index } = payload;
        console.log(payload);
        const myNewTodos = [...todos];
        myNewTodos[index].isDone = status;
        setTodos(myNewTodos);
    };
    return (<div className="app">
        <h1>Todo List</h1>
        <AddToDoForm addTodo={addTodo} />
        {todos.map((todo, index) => {
            const { text, isDone } = todo;
            const btnText = isDone ? "Undo" : "Done";
            return (<div key={index} className="list-item">
                <span className={isDone ? "strike-through" : ""}>{text}</span>
                <button className={`status-btn ${isDone ? "done" : ""}`} onClick={() => toggleTodoStatus({ status: !isDone, index })}>{btnText}</button>
            </div>);
        })}

    </div>);
}
export default Main;


