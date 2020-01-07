// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
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

  bitrateChangedHandler = (event) => {
    event.persist();
    this.setState( previousState => {
          previousState.settings.bitrate = 12;
    });
  }

  resolutionChangedHandler = (event) => {
    event.persist();
    this.setState( previousState => {
          previousState.settings.video.resolution = '720p';
    });
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={ this.bitrateChangedHandler }>bitrate</button>
        <button className="resolution" onClick={ this.resolutionChangedHandler }>resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger;
