import React,{useState,useEffect} from "react";
import axios from "axios";
const API=process.env.REACT_APP_API;

function App(){
  const[title,setTitle]=useState('')
  const[tasks,setTasks]=useState([])
  
  const fetchTasks=async ()=>{
    const res=await axios.get(`${API}/api/tasks`)
    setTasks(res.data)
  }
  const handleAdd=async () =>{
    if(!title) return;
    await axios.post(`${API}/api/tasks`,{title})
    setTitle('')
    fetchTasks()
  }

  const handleDelete=async ()=>{
    await axios.delete(`${API}/api/tasks/${id}`)
    fetchTasks()
  }
  useEffect(()=>{
    fetchTasks()
  },[])
  return(
  <div style={{padding:"2em"}}>
    <h2>TASK MANAGER</h2>
    <input value={title}
    onChange={(e)=>setTitle(e.target.value)}
    placeholder='NEW TASK'/>
    <button onClick={handleAdd}>Add</button>
  <ul>
    {tasks.map(task=>{
      <li key={task._id}>
        {task.title} &nbsp;
        <button onClick={()=>handleDelete}>delete</button>
      </li>
    })}
  </ul>
  
  
  </div>
)
}
export default App;
