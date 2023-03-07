

// const Nav = (props) => {
//   return (
//     <div>
//       {props.data}   {props.password}
//     </div>
//   )
// }

// export default Nav
import React, { Component } from 'react'

 class Nav extends Component {
  render() {
    return (
      <div>
        {this.props.data}     {this.props.password}
      </div>
    )
  }
}
export default Nav
