import React from 'react'

export default class DigitalClicker extends React.Component{
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
    this.theButtonIsClicked = this.theButtonIsClicked.bind(this)
  }
  theButtonIsClicked() {
    this.setState(prevState => {
      return { timesClicked: ++prevState.timesClicked }
    })
  }
  render(){
    return (
      <button onClick={this.theButtonIsClicked}>{this.state.timesClicked}</button>
    )
  }
}
