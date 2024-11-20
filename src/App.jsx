import { useState } from 'react'
import './App.css'

function App() {
  const[color,setColor] =  useState("")

  return (
    <>
     <div className='d-flex align-items-center justify-content-center d-flex-column' style={{width:"500px",minHeight:"100vh",backgroundColor:color}}>
       <button className='btn btn-primary' onClick={()=>{setColor("blue")}}>Blue</button>
       <button className='btn btn-success ms-2' onClick={()=>{setColor("green")}}>Green</button>
       <button style={{backgroundColor:'yellow',color:"white"}} className='btn ms-2' onClick={()=>{setColor("yellow")}}>Yellow</button>
       <button className='btn btn-warning ms-2' style={{color:"#fff"}} onClick={()=>{setColor("orange")}}>Orange</button>
     </div>
    </>
  )
}

export default App
