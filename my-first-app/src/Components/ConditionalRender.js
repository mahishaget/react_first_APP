import React, { Component } from 'react';

class ConditionalRender extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         issubscriber:true,
      }
    }
    
  render() {
    if(this.state.issubscriber){
        return(<div>
  <h1>Subscribed</h1> 
        </div>)
    }else{
        return(<h1>Subscribe</h1>)   
     }
    // return (
    //   <div>
    //  
    //   
    //   </div>
    // )
  }
}
export default ConditionalRender;