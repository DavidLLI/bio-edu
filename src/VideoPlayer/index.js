import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import './VideoPlayer.css';

const debounce = (fn, time) => {
  let timeout;

  return function() {
    const functionCall = () => fn.apply(this, arguments);
    
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  }
}

class VideoPlayer extends Component {
  constructor(props) {
  	super(props);

    this.reactScrollRef = React.createRef();
    this.reactPlayerRef = React.createRef();
    this.scrollArea = React.createRef();

    this.playbackConst = 500;

  	this.onWheel = this.onWheel.bind(this);
    this.metaDataCallback = this.metaDataCallback.bind(this);
  }

  componentDidMount() {
    window.requestAnimationFrame(this.onWheel);

    let options = {
      passive: false
    };
    //this.reactScrollRef.current.addEventListener('wheel', this.onWheel, options);

    //window.requestAnimationFrame(this.onWheel);
  }

  componentWillUnmount() {
    //this.reactScrollRef.current.removeEventListener('wheel', this.onWheel);
  }

  componentDidUpdate(prevProps, prevState) {
    this.scrollArea.current.scrollTop = 0;
    this.reactScrollRef.current.style.height = Math.floor(this.reactPlayerRef.current.duration) * this.playbackConst + "px";
  }

  metaDataCallback(e) {
    this.reactScrollRef.current.style.height = Math.floor(this.reactPlayerRef.current.duration) * this.playbackConst + "px";
  }

  onWheel() {
    //e.preventDefault();
    let currentTime = this.reactPlayerRef.current.currentTime;
    const frameNumber = this.scrollArea.current.scrollTop/this.playbackConst;
    this.reactPlayerRef.current.currentTime = frameNumber;
    window.requestAnimationFrame(this.onWheel);
    //console.log(frameNumber);
  }

  render() {
    return (
      <div ref={this.scrollArea} style={{overflow: 'scroll', height: '100%', width: '100%'}}>
        <div ref={this.reactScrollRef}
          className='video-player'>
  	      <video
            className='video-itself'
            ref={this.reactPlayerRef}
  	      	src={this.props.data}
            onLoadedMetadata={this.metaDataCallback} />
        </div>
      </div>
    )
  }
}

export default VideoPlayer;