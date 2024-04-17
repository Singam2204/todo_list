import { useState } from 'react';
import './App.css';
import Todoinput from './components/Todoinput';
import Todolist from './components/Todolist';

function App() {
  const[listTodo,setListTodo]=useState([]);
  let addList=(inputText)=>{
    
    if(inputText != '')
    setListTodo([...listTodo,inputText])
  }
  const deleteListItem=(key)=>{
    let newListTodo= [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className='main-container'>
    <h1 className='heading'>TODO LIST</h1>
      <div className='center-container'>
        <Todoinput addList={addList}/>
        
        <hr/>
        {listTodo.map((listItem,i)=>{
          return(
            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>

  )
}

export default App;