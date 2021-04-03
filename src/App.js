import logo from './logo.svg';
import React , {useState} from 'react';
import './App.css';
import Todoform from './Components/Todoform';
import TodoList from './Components/Todolist';



function App() {
 
  return (
    <div className="App">
      
       <h1 className="todotxt">ToDo List</h1>
   
      <Todoform />
    

    </div>

  );
}

export default App;
