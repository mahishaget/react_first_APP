import React, { Component } from 'react';

class Event_On_Class extends Component {
     Click_Handler(){ 
        console.log("Clicked!");
        alert("Clicked on class")
    }
  render() {
    return (
      <div>
        <button onClick={this.Click_Handler}>Click Me</button>
      </div>
    )
  }
}
export default Event_On_Class;
