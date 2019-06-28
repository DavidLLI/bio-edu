import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import './VideoPlayer.css';

class VideoPlayer extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  	  progress: {
  	  	played: 0,
  	  	playedSeconds: 0
  	  }
  	};

  	this.onProgress = this.onProgress.bind(this);
  	this.onScroll = this.onScroll.bind(this);
  }

  onProgress(p) {
  	console.log(p);
  	this.setState({progress: p});
  }

  onScroll(e) {
  	console.log(e);
  }

  render() {
    return (
      <div className='video-player'
      	onScroll={this.onScroll}>
	      <ReactPlayer 
	      	url={this.props.data}
	      	onProgress={this.onProgress}/>
      </div>
    )
  }
}

export default VideoPlayer;