import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor(){
        super();

        this.state = {
            timesClicked: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
          timeClicked: ++this.state.timesClicked,
        });
      }

      render() {
        return (
          <div>
            <button onClick={this.handleClick}>{this.state.timeClicked}</button>
          </div>
        );
      }  
}
