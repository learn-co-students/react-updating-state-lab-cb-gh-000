// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }

    this.click=this.click.bind(this);
  }

  click(event) {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }
  render() {
    return (
      <button onClick={this.click}>{this.state.timesClicked}</button>
    )
  }
}
