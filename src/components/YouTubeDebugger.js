// Code DigitalClicker Component Here
import React from 'react';
export default class  YouTubeDebugger extends React.Component {

  constructor(props) {
super(props);
  this.state={ errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } };

  }
  render(){
    return(
      <div>
      <button className='bitrate' onClick={()=>{
        let settingsConfig={...this.state.settings};
        settingsConfig.bitrate=12;
        this.setState({settings:settingsConfig})}}>{this.state.timesClicked}</button>
<button className='resolution' onClick={()=>{
  let settingConfig={...this.state.settings};
  settingConfig.video.resolution='720p';
  this.setState({settings:settingConfig});

}}>{}</button>
</div>
    )
  }
}
