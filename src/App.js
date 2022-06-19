import React, { useState } from 'react';
import './App.css';
import {IoIosAddCircle} from 'react-icons/io';
import {MdDelete} from 'react-icons/md'


function App() {
const[todo,setTodo]=useState("");
const[toDoList,setToDoList]=useState([]);

const submitTodo =()=>
{
   setToDoList([...toDoList,todo])

   setTodo("")
}





  return (
    <div className="App">
    <div  className='app-container'>

      <h3 className='head'>Take Up Note</h3>
        <div className='input-area' >

          <input type='text' placeholder='Add your note here' value={todo} onChange={(event)=>setTodo(event.target.value)}/>  <IoIosAddCircle onClick={submitTodo} className='add-btn'/>
        </div>

        <div className='to-do-list'>
          <ul>
    
{toDoList.map((item,index)=>
(
  <li key={index+1}>
  {<MdDelete onClick={deleteTodo} className='delete-btn'/>} {item} 
    </li>
))}

   
   

    
         
          </ul>

        </div>


      

    </div>
      
    </div>
  );
}

export default App;
