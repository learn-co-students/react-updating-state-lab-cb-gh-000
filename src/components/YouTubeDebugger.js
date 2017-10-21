import React from 'react';

export default class YoutubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: "1080p"
          }
        }
    }

  }
  onClickResHandler = () => {
    this.setState({

        settings: {
          ...this.state.settings,
          video: {
            ...this.state.video,
            resolution: "720p"
          }
        }
    });
  }
  onClickBitHandler = () => {
    this.setState({

      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }
  render() {
    return(
      <div>
        <button className='bitrate' onClick={this.onClickBitHandler} />
        <button className='resolution' onClick={this.onClickResHandler} />
      </div>
    );
  }
}
