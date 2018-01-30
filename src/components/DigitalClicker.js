// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0,
    };
  }
  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1,
    });
  }
  render() {
    return (
      <div>
        <h4>{this.state.timesClicked}</h4>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

export default DigitalClicker;