import React, { Component } from 'react';

export default class DigitalClicker extends Component {

  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = ()=>{
    var nextCount = this.state.timesClicked + 1;
    this.setState({
      timesClicked: nextCount
    })
  }

  render () {
    return (
      <div className="digital-clicker">
        <button onClick={this.handleClick} >{this.state.timesClicked}</button>
      </div>
    )
  }
}
