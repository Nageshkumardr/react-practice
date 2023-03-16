import React,{useState} from 'react'
import {faker} from "@faker-js/faker"
import './global.css'

const App = () => {

    let[img,  setImg]=useState(faker.image.avatar())


    let handleChange=()=>{
        setImg(faker.image.avatar())
    }
  return (
    <div className='main'>
        <div className='Block'>
            <h1>Image</h1>
      <img src={img} alt="" />
      <button onClick={handleChange}>change the image</button>
      </div>
    </div>
  )
}

export default App


