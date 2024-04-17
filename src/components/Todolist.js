import React from 'react'

function Todolist(props) {
  return (
    <li className='list-item'>
   {props.item}
    <button className='del-btn' onClick={e=>{
        props.deleteItem(props.index)
    }}>Delete</button>
    </li>
  )
}

export default Todolist

