import React from 'react';

export default class DigitalClicker extends React.Component{
  constructor(){
    super();
    
    this.state={
    timesClicked:0,

  };
this.handleClicks=this.handleClicks.bind(this);
  }

  handleClicks(){
    this.setState({
      timesClicked:++this.state.timesClicked,
    });
  }
  render(){
return <button onClick={this.handleClicks}>{this.state.timesClicked}</button>
    
  };
}