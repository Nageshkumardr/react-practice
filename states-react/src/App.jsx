import React, { Component } from 'react'

 class App extends Component {
    state={
        subject:"react",
        skills:["HTML","CSS","JS"]
    }
  render() {
    return (
      <div>
        <h1>{this.state.subject}</h1>
        <ol>{this.state.skills.map((x)=>{
        return <li>{x}</li>
        })}</ol>
      </div>
    )
  }
}
export default App
