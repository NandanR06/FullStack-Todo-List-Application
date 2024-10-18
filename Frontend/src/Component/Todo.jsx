import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import './Todo.css'

export default function Todo({text,updateMode,deleteTodo}) {
  return (
    <div  className='todo'>
        <div className="text">{text}</div>
        <div className="icons">
        <SaveAsIcon   className='icon' onClick={updateMode}/>
         <DeleteIcon className='icon' onClick={deleteTodo}/>
           
        </div>
      
    </div>
  )
}
