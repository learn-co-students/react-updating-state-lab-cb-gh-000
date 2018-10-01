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
          };

        this.handleBitrateChange = this.handleBitrateChange.bind(this);
        this.handleResolutionChange = this.handleResolutionChange.bind(this);
    }

    handleBitrateChange() {
        this.setState({
            settings: {
            ...this.state.settings,
            bitrate: 12
            },
        });
      }

    handleResolutionChange(){
        this.setState({
            settings: {
            ...this.state.settings,
            video: {
                resolution: '720p'
            }
            },
        });
    }  

    render() {
        return (
          <div>
            <div>
        <button className="bitrate" onClick={this.handleBitrateChange}>Change bitrate</button>
        <button className="resolution" onClick={this.handleResolutionChange}>Change resolution</button>
      </div>
          </div>
        );
    }
}