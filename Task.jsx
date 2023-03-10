import React from 'react'

const Task = (props) => {
    let users=props.data
  return (
    <div id='Parent_Block'>
      {users.map((x)=>{
        return <div id='main_Block'>
            <img src={x.actorPhoto} alt=""  />
            <h2>{x.actorName}</h2>
            <h3>{x.movies.map((x)=>{
              return  <li>{x}</li>
            })}</h3>
            <h3>{x.languages}</h3>
        </div>
      })}
    </div>
  )
}

export default Task
