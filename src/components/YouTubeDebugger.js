// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component{
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: { resolution: '1080p' }
      }
    }
  }

  updateBitRate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  updateVideoRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: { resolution: '720p'}
      }
    })
  }

  render(){
    return (
      <div>
        <button className="bitrate" onClick={this.updateBitRate}>Bitrate</button>
        <button className="resolution" onClick={this.updateVideoRes}>Resolution</button>
      </div>
    )
  }


}
