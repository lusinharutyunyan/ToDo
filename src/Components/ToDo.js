import React from 'react';
import { Checkbox } from 'antd';
import { Button } from 'antd';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

function ToDo({text, todos, todo, setTodos}) {
    const deleteHnadler = () =>{
        setTodos(todos.filter((el) => el.id !== todo.id))
    };
    const completeHnadler =() => {
       setTodos(todos.map((item)=> {
           if(item.id === todo.id){
               return { ...item,completed:!item.completed}
           }
           return item;
       }))
    }
    return (
        <div className="todo">
            
            <li className ={`todoitem ${todo.completed ? "complited" : ""}`}>{text}</li>
            <Checkbox onChange={onChange} onClick ={completeHnadler}> </Checkbox>
            <Button  type="primary" onClick ={deleteHnadler} >Delete</Button>
           
           
        </div>
    )
}

export default ToDo;
