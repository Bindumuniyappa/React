import React, { useState } from 'react'

const ToDoListTask = () => {
    const [todo,setTodo]=useState("");
    const [list,setList]=useState([]);
    console.log(list);
    
    const handleChange=(e)=>{
        setTodo(e.target.value);
    }

    const handleSubmit=()=>{
        setList([...list,todo]);
        setTodo("");
    }
  return (
    <div>
        <input placeholder='Enter something' onChange={handleChange} value={todo}/>
        <button onClick={handleSubmit}>Go</button>
        {list.length==0 ?<p>Nothing is added yet</p>:
            list.map((ele,ind)=>{
                return(
                    <li key={ind}>{ele}
                    <button onClick={()=>setList(list.filter((t)=>t!==ele))}>Delete</button></li>   
                )
            })
        }
    </div>
  )
}

export default ToDoListTask