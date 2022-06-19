import React from 'react';
import {MdDelete} from 'react-icons/md'

function TodoList(props) {


  return (
    <li>
      <MdDelete  className='delete-btn' onClick={()=>
      {
        props.onSelect(props.id)
      }}/>
      {props.text} 
    </li>
  )
}

export default TodoList