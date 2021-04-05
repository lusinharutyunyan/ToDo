import React, { useState } from 'react';
import ToDo from './ToDo';

const TodoList = ({ todos, setTodos }) => {

    return (
        <div className="todocontainer">
            <ul className="todolist">
                {todos.map(todo => (
                    <ToDo 
                    key={todo.id} 
                    text={todo.text} 
                    todos={todos} 
                    todo={todo}
                    setTodos={setTodos} />
                ))}
            </ul>
        </div>
    );
};
export default TodoList;
