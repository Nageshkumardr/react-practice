
import React from 'react'

const Child = (props) => {
  return (
    <div style={{marginLeft:"50%"}}>
        <h1 style={{color:"red"}}>{props.data.name}</h1>
        <h1 style={{color:"blue"}}>{props.data.phno}</h1>
        <h1 style={{color:"green"}}>{props.data.address}</h1>
    </div>
  )
}

export default Child;
