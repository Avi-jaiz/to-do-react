import React, { useState } from 'react';
import './App.css';
import {IoIosAddCircle} from 'react-icons/io';

import TodoList from './TodoList';


function App(props) {
const[todo,setTodo]=useState("");
const[toDoList,setToDoList]=useState([]);

const submitTodo =()=>
{
  if(todo!=="")
  {
    setToDoList((oldTodos)=>
    {
     return [...oldTodos,todo]
    })
    setTodo("")
  }
  else
  {
    alert("Input cannot be empty")
  }
   
}

const deleteTodo=(id)=>
{
  console.log("deleted");

  setToDoList((oldTodos)=>
  {
    return oldTodos.filter((elem,index)=>
    {
      return index !== id;
    })
  })

}
  

return (
  <div className="App">
  <div  className='app-container'>

    <h3 className='head'>Take Up Note</h3>
      <div className='input-area' >

        <input type='text' placeholder='Add your note here' value={todo} onChange={(event)=>setTodo(event.target.value)} />  <IoIosAddCircle onClick={submitTodo} className='add-btn'/>
      </div>

      <div className='to-do-list'>
        <ul>
  
{toDoList.map((item,index)=>
{
return (
  <TodoList
  text={item}
  key={index}
  id={index}
  onSelect={deleteTodo}
  />
)
})}


 
 

  
       
        </ul>

      </div>


    

  </div>
    
  </div>
);
   
  
}  


 
 

export default App;
