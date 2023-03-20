import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div className='nav-container'>
      <h1 className='one'> 8K TODO</h1>
      <h1 className='two'>Home</h1>
      <h1 className='three'>Tools</h1>
      <img   className='image' src="https://cdn.iconscout.com/icon/free/png-256/arrow-direction-right-way-forward-next-35-16792.png?f=avif&w=256" alt="" width="60px"  height="40px"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyVITjrPpybgASfBy-_5bwTAuuasMfni2MA&usqp=CAU" alt="" width="60px"  height="40px" />
      </div>
    )
  }
}
