import React from 'react'

const Course = (props) => {
 
   
if(props.details.CourseAvailable==true){
     return (
        <>
    <h1>{props.details.CourseName}</h1>
    <h1>{props.details.CourseDuration}</h1>
    <button style={{color:"blue",backgroundColor:"green" ,width:"100px",height:"30px",alignItems:"center"}}>Available</button>
    </>
     )
}
else{
    return(
        <>
     <h1>{props.details.CourseName}</h1>
     <h1>{props.details.CourseDuration}</h1>
     <button style={{color:"blue",backgroundColor:"green"}}>Not Available</button>
     </>
    )
}

  
}

export default Course
