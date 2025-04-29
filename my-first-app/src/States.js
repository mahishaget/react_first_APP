import React, { Component } from 'react'

class Subscribe extends Component {
    constructor() {
      super()
    
      this.state = {
         channel:"DG-Tech"
      }
    }
changeMessage(){
this.setState({
    channel:"ሰብስክራይብ ስላደረጉ እናመሰኛለን!",
})
    }
  render() {
    return (
      <div>
        <h1>{this.state.channel}</h1>
        <button onClick={()=>this.changeMessage()}>ሰብስክራይብ</button>
      </div>
    )
  }
}export default Subscribe;
