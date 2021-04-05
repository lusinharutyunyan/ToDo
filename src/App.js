
import React , {useState} from 'react';
import './App.css';
import Todoform from './Components/Todoform';
import TodoList from './Components/Todolist';



function App() {
  const [inputText, setInputText] = useState("");
  const [todos,setTodos] = useState([]);
 
  return (
    <div className="App">
      <header>
      <h1 className="todotxt">ToDo List</h1>
      </header>
       
   
      <Todoform inputText ={inputText} todos={todos} setTodos ={setTodos} setInputText = {setInputText}/>
      <TodoList todos ={todos} setTodos={setTodos}/> 
    

    </div>

  );
}

export default App;
