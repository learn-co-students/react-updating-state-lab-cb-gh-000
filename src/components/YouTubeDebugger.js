import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: { resolution: '1080p' }
      }
    }
  }

  handleBitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleVideoClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }

  render () {
    return (
      <div className="youtube-debugger">
        <p>Errors: {this.state.errors.join(", ")}</p>
        <p>User: {this.state.user}</p>
        <p>Settings bitrate: {this.state.settings.bitrate}</p>
        <p>settings video resolution: {this.state.settings.video.resolution}</p>
        <button className="bitrate" onClick={this.handleBitrateClick} >change bitrate to 12</button>
        <button className="resolution" onClick={this.handleVideoClick}>change resolution to 720p</button>
      </div>
    )
  }
}
