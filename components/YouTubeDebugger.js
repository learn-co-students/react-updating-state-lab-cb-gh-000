import  React from 'react';

export default class YouTubeDebugger extends React.Component{
  constructor(){
    super();
  

  this.state={
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }
this.Changebitrate=this.Changebitrate.bind(this);
this.Changeresolution=this.Changeresolution.bind(this);
}
Changebitrate(){
  this.setState({
    settings:Object.assign({},this.state.settings,{bitrate:12,}),
  });
}
Changeresolution(){
  this.setState({
    settings: Object.assign({}, this.state.settings, {
         video: Object.assign({}, this.state.settings.video, {
           resolution: '720p'
         })
       }),
  });
}

render(){
  return(<div><button className='bitrate' onClick={this.Changebitrate}>{this.state.settings.bitrate}</button>
  <button className='resolution' onClick={this.Changeresolution}>{this.state.settings.video.resolution}</button></div>);
}
}