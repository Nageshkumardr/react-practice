import React ,{useState} from 'react'
import "./global.css"

const App = () => {

    let[count ,setCount]=useState(0)

let handlechangeincrement=()=>{
    setCount(count+1)
}

let handlechangedecrement=()=>{
    setCount(count-1)
}

let handlechangeReset=()=>{
    setCount(count=0)
}



  return (
    <>
    <div className='main'>
    <div className='header'>
        <h1>Counter</h1>
      <h1>{count}</h1>
   
    <div className='mainBlock'>
   
    <button onClick={handlechangeincrement}>+  Increment</button>
    <button onClick={handlechangedecrement}>- Decrement</button>
    <button onClick={handlechangeReset}>Reset</button>
    </div>
     </div>
     </div>
     </>
  )
}

export default App
