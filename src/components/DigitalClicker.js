// Code DigitalClicker Component Here
import React, { Component } from "react";

class DigitalClicker extends Component{
    constructor(){
        super();
        this.state = {
            timesClicked:0
        };
    }
    handleButton = ()=>{
        this.setState(previousState =>{
            return {
                timesClicked:previousState.timesClicked+1
            }
        })
    }
    render(){
        return(
            <div>
                // <p>This is how many times you have clicked: {this.state.timesClicked}</p>
                <button onClick={this.handleButton}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
export default DigitalClicker;
