import { formatCountdown } from 'antd/lib/statistic/utils'
import React, { useState } from 'react';
import "./Todoform.css"
import { Input } from 'antd';
import { Button } from 'antd';



function Todoform({setInputText, todos, setTodos, inputText}) {
 const inputTextHandler = (e) => {
   console.log(e.target.value);
   setInputText(e.target.value); 
 };
 const submitTodoHandler = (e) => {
   e.preventDefault();
   setTodos([
     ...todos,{text:inputText, completed:false,id:Math.random()*100}
   ]);
   setInputText("");

 };
  return (
    <form className="todoform" >
      <Input onChange={inputTextHandler} placeholder="Add a todo"  className="todoinput" name="text"value={inputText} />
      <Button onClick = {submitTodoHandler} type="primary">Add </Button>

    </form>
  )
}

export default Todoform



