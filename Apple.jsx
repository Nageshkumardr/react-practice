import React from 'react'
import STYLE from "./apple.module.css"

const Apple = () => {
  return (
    <>
    <div id={STYLE.main}> 
      <div>
        <img id={STYLE.image} src="https://assets.stickpng.com/images/602173aa0ad3230004b93c1b.png" alt="" />
      </div>
  
      <div>
       
        <ul id={STYLE.menu}>
 
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Music</a>
            </li>
            <li>
                <a href="">Library</a>
            </li>
            <li>
               <a href="">About</a>
            </li>
            <li>
                 <a href="">contact</a>
            </li>
            <li>
                <a href="  placements">  Login</a>
            </li>
            <li>
                <a href="Enquiry">signin</a>
            </li>
         
        </ul>
    
        
       
        </div>
      </div>
    
    </>
  )
}

export default Apple