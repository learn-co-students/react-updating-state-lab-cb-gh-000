// Code DigitalClicker Component Here
import React from "react";

class DigitalClicker extends React.Component {
  constructor() {
<<<<<<< HEAD
    super()
=======
>>>>>>> 4bdeaf5365886285d64a6ba013bd4ef16769e9b9

    this.state = {
      timesClicked: 0,
    }
  }

  handleClick =  () => {
    this.setState({
<<<<<<< HEAD
      timesClicked: this.state.timesClicked +1,
=======
      timesClicked = timesClicked +1,
>>>>>>> 4bdeaf5365886285d64a6ba013bd4ef16769e9b9
    })
  }

  render ()  {
    return (
<<<<<<< HEAD
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
=======
      <button onClick={this.handleClick}>{this.state.timesClicked}</ button>

>>>>>>> 4bdeaf5365886285d64a6ba013bd4ef16769e9b9
    )
  }
}

export default DigitalClicker
