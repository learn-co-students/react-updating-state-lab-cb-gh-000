// Code YouTubeDebugger Component Here
import React from "react"

export default class YouTubeDebugger extends React.Component {
  constructor () {
<<<<<<< HEAD
    super() 
=======
>>>>>>> 4bdeaf5365886285d64a6ba013bd4ef16769e9b9

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
  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      }
    })
  }
  handleResolution = () => {
    this.setState({
      settings:{
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }
  render () {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate} />
        <button className="resolution" onClick={this.handleResolution} />
      </div>
    )
  }
<<<<<<< HEAD
}
=======
>>>>>>> 4bdeaf5365886285d64a6ba013bd4ef16769e9b9
