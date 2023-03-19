import React, { Component ,createRef} from 'react'

export default class App extends Component {

    constructor()
    {
        super()
        this.state={
            name:"nagesh"
        }
        this.h1Ref=createRef()
    }


componentDidMount(){
let h1=document.querySelector("h1")
console.log(h1,"Dom Way");
console.log(this.h1Ref.current,"react way");

}


  render() {
    return (
      <div>
        <h1 ref={this.h1Ref}>{this.state.name}</h1>
      </div>
    )
  }
}



