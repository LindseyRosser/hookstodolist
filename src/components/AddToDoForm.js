import React, { useState } from 'react';


export const AddToDoForm = ({ addTodo }) => {
    const [text, setText] = useState("");
    const submitToDo = (ev) => {
        ev.preventDefault();
        if (text) {
            addTodo(text);
            setText("");
        }
        else {
            alert("A value is required!");
        }
    };
    return (<form onSubmit={submitToDo}>
        <div>
            <input className="todo-input" placeholder="Start typing..." onChange={(ev) => {
                setText(ev.target.value);
            }} value={text} />
            <button>Submit</button>
        </div>
    </form>);
}
export default AddToDoForm;
