import axios from 'axios'
const url = "https://fullstack-todo-list-application-vm0u.onrender.com"
const getData = (setTodo) => {
    axios.get(url)
        .then((res) => {
            const info  = res.data;
            console.log(info);
            setTodo(info)
        })
        .catch(err => console.log(err))
}

const addTodo = (text,setText,setTodo)=>{
        axios.post(`${url}/save`,{text})
        .then((res)=>{
            console.log(res)
            setText('')
            
            getData(setTodo)
        })  
        .catch((err)=>
            console.log(err)
        ) 
}
const updateToDo= (todoId,text,setTodo,setText,setIsupdate)=>{
    axios.put(`${url}/update/${todoId}`,{_id:todoId,text})
    .then((res)=>{
        console.log(`data from frontend : ${res.data.text}`)
        setText('')
        setIsupdate(false)
        getData(setTodo)
    }) 
    .catch((err)=>
        console.log(err)
    )  
}

const deleteTodo = (_id,setTodo)=>{
    axios.delete(`${url}/delete/${_id}`,{_id})
    .then((res)=>{
        getData(setTodo)
    })
    .catch((err)=>
        console.log(err)
    ) 
}

export default {getData,addTodo,updateToDo,deleteTodo};
