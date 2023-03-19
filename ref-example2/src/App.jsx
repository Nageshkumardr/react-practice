import React, { Component, createRef } from 'react'

export default class App extends Component {

    constructor(){
        super()
        this.state={
            company:"Qspiders"
        }
        this.h1Ref=createRef()
        this.btnRef=createRef()
    }
   
  render() {
    return (
        
   <>
        <h1 ref={this.h1Ref}>{this.state.company}</h1>
     <button ref={this.btnRef} onClick={()=>{
        this.setState({company:"jspiders"})
        this.h1Ref.current.style.color="orange"
        this.h1Ref.current.style.border="2px solid red"
        this.h1Ref.current.style.width="200px"
        this.btnRef.current.style.backgroundColor="yellow"
        this.btnRef.current.style.margin="20px"
        this.btnRef.current.style.width="200px"
        this.btnRef.current.style.height="50px"
        this.btnRef.current.style.borderRadius="20px"
        this.btnRef.current.style.border="5px solid red"
       
     }}>change the company </button>
        </>
    )
  }
}
