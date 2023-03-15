import React, { Component } from 'react'
import "./global.css"

export default class Counter extends Component {

  constructor(){
    super()
    this.state={
      count : 0
    }
  }
  handleIncrement=()=>{
    this.setState({count : this.state.count+1})
  }
  handleDecrement=()=>{
    this.setState({count : this.state.count-1})
  }
  handleReset=()=>{
    this.setState({count : 0})
  }
  render() {
    return (
      <div className='mainBlock'>
        <h2 className='heading1'>
          Counter
        </h2>
        <h1 className='heading2'>
          {this.state.count}
        </h1>
        <div className='main'>
          <button className='handleIncrement' onClick={this.handleIncrement}>
            + Increment
          </button>
          <button className='handleDecrement' onClick={this.handleDecrement}>
            - Decrement
          </button>
          <button className='handleReset' onClick={this.handleReset}>
            Reset
          </button>
          </div>
      </div>
    )
  }
}