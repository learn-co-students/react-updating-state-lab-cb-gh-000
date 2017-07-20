import React from 'react'

export default class YouTubeDebugger extends React.Component{
  constructor(){
    super()
    //Initial State
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
    //Setup Functions
    this.changeBitrateTo12 = this.changeBitrateTo12.bind(this)
    this.changeVideoResolutionTo720p = this.changeVideoResolutionTo720p.bind(this)
  }
  changeBitrateTo12(){
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    })
  }
  changeVideoResolutionTo720p(){
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        },
      },
    })
  }
  render(){
    return (
      <div>
      <button className="bitrate" onClick={this.changeBitrateTo12} />
      <button className="resolution" onClick={this.changeVideoResolutionTo720p} />
      </div>
    )
  }
}
