import { useState } from 'react'
import './App.css'
import TodoList from './component/TodoList'

function App() {
  const [mode,setMode] = useState("light");
  const handlemode = () =>{
    if(mode==='light'){
      document.body.style.backgroundColor="black";
      document.body.style.color = "white";
      setMode("dark")
    }else{
       document.body.style.backgroundColor="white";
      document.body.style.color = "black";
      setMode("light")
    }
  }
  return (
   <>
    <TodoList mode={mode} handlemode={handlemode}/>
   </>
  )
}

export default App
