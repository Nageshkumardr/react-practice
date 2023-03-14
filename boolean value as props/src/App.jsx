import React from 'react'
import Course from './Course'

const App = () => {
  return (
    <div>
      <Course details={{
        CourseName:"react",
        CourseAvailable:true,
        CourseDuration:"3 months"
      }}/>
    </div>
  )
}

export default App
