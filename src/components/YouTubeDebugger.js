// Code YouTubeDebugger Component Here

import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
   super();

   this.state = {
     errors: [],
     user: null,
     settings: { bitrate: 8, video: { resolution: '1080p' } }
   };
 }

  info = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
      });
    }
  other = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
      });
    }

  render() {
    return (
      <div>
        <button onClick={this.info} className="bitrate">text</button>
        <button onClick={this.other} className="resolution">text</button>
      </div>
    )
  }
}
