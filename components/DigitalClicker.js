const  React = require('react');

class DigitalClicker extends React.Component {
    constructor(){
       super()
       this.state ={
            timesClicked : 0,
        } }

       Add(){
            let time = this.state.timesClicked + 1 ;
            this.setState(
                {
                    timesClicked : time
                }
            )
       }
    render() {

        return (
            <div>
                 <button onClick = {this.Add.bind(this)}>{this.state.timesClicked}</button>

            </div>
        );
    }
}

module.exports = DigitalClicker;
