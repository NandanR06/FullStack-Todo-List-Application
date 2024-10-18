import React, { useEffect, useState } from 'react'
import './App.css'
import Todo from './Component/Todo'
import info from './Utiliti/HandalApi.jsx';

const {getData,addTodo,updateToDo,deleteTodo}=info;
export default function App() {

  const [toDo, setTodo] = useState([])
   const [text,setText]=useState('');
   const [isupdate,setIsupdate]=useState(false)
   const [todoId,setTodoId]=useState("");


  useEffect(() => { 
    getData(setTodo) 
  }, []);

  const updateMode=(_id,text)=>{
setIsupdate(true);
setText(text)
setTodoId(_id);
  }

  return (
    <div className='container'>
      <h1>ToDo App</h1>
      <div className="top">
        <input
         type="text" 
         placeholder='Add todos...'
         value={text}
         onChange={(e)=>{setText(e.target.value)}}
          />

        <div className="add"  type="button"
        onClick={isupdate?()=>
        updateToDo(todoId,text,setTodo,setText,setIsupdate):()=>addTodo(text,setText,setTodo)}>
          {isupdate?'Update':'Add'}
          </div>

      </div>

      <div className="overFlow"> 
        <div className="list">
        {toDo.map((item) => 
          (<Todo key={item._id} 
          text={item.text} 
          updateMode={()=>updateMode(item._id,item.text)}  deleteTodo={()=>deleteTodo(item._id,setTodo)}/>)
            )}
      </div></div>
     
    </div>
  )
}
