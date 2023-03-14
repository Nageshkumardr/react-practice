import React, { Component } from 'react'

export default class App extends Component {
     constructor(){
        super()
      this.state ={userName:"nagesh"}


     }



  render() {
    return (
      <div>
        <h1>{this.state.userName}</h1>
      </div>
    )
  }
}

