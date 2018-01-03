// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component{
  constructor(){
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  to12 = () => {
    this.setState({
      settings: {
        ...this.state.settings,
      bitrate: 12,
      }
    })
  }

  to720 = () => {
    this.setState({
      settings: Object.assign({},
        this.state.settings, {
          video: {
          resolution: '720p',
        }
          }
        ),
      })
  }

  render(){
    return(
      <div>
      <button className="bitrate" onClick={this.to12}>bitrate</button>
      <button className="resolution" onClick={this.to720}>res</button>
      </div>
    )
  }

}
