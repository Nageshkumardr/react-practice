import React, { useState } from 'react'
import "./global.css"
import Card from "./Card"


const App = () => {
      let [inputText,setInputText] = useState('')
      let [todoList,setTodoList] = useState([])
   

      let handleRemoveItem=((index)=>{
        let todoListCopy = [...todoList]
         todoListCopy.splice(index,1)
        setTodoList(todoListCopy)

    
    })
     let handleTodoList=((e)=>{
        setTodoList([...todoList,inputText])
          console.log ('todoList',todoList.map((x)=>{
                  return <li>{x}</li>   
        }))
     })
  return (
    <>
    <Card/>
     <div className='main'>
        <div className='container'>
    <div className='mainDivision'>
      <input className='input' onChange={(e)=> setInputText(e.target.value)} type="text" />
      <button id='btn4' className='button' onClick={handleTodoList}>Add Todo</button>
      </div>
      <div id='buttonsContainer'>
        <button id='btn1'>All</button>
        <button id='btn2'>Active</button>
        <button id='btn3'>InActive</button>
      </div>
      <div className='itemlist'>{todoList.map((listItem,index)=>{
        return <ol key={index} start={index}>
            <li style={{backgroundColor:"grey"}}>{listItem } <img id='one' onClick={()=>handleRemoveItem(index)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fdplpnIHcIzMzPtws0bkSfkK7rC0aMeXhw&usqp=CAU" alt="" /></li>
        </ol>
      })}</div>
      
      </div>
    
     
     
  
   
     
    </div>
    </>
  )
}

export default App

