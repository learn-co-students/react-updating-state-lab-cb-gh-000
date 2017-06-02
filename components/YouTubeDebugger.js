import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props);

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

    this.changeBitrate = this.changeBitrate.bind(this);
    this.changeResolution = this.changeResolution.bind(this);
  }

  changeBitrate() {
    this.setState({
      settings: Object.assign(this.state.settings, {bitrate: 12})
    });
  }

  changeResolution() {
    this.setState({
      settings: Object.assign(this.state.settings, {
        video: Object.assign(this.state.settings.video, {resolution: '720p'})
      })
    });
  }

  render() {
    return (
      <div className="youtube-debugger">
        <button className="bitrate" onClick={this.changeBitrate}>Change Bitrate to 12</button>
        <button className="resolution" onClick={this.changeResolution}>Change resolution to 720p</button>
      </div>
    );
  }
}
