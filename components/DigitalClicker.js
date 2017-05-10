import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor() {
        super();

        this.counter = this.counter.bind(this);

        this.state = {
            timesClicked: 0
        };
    }

    counter() {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        });
    }

    render() {
        return(
            <button onClick={this.counter}>{this.state.timesClicked}</button>
        );
    }
}
