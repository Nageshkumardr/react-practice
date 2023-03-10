import React from 'react'
import Json from './actorsDetails.json'
import Task from './Task'
const Details = () => {
  return (
    <div>
      <Task data={Json}/>
    </div>
  )
}

export default Details
