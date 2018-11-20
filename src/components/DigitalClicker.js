// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component{
  constructor(){
    super();
    this.state = {
      timesClicked:0
    };
  }
  render(){
    return(
      <div className="digital-clicker">
        <button  onClick={()=>{
          this.setState({
            timesClicked: this.state.timesClicked + 1});
        }}>{this.state.timesClicked}
        </button>
      </div>
    );
  }
}
