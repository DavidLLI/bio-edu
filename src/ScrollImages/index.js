import React, { Component } from 'react';

import './ScrollImages.css';

class ScrollImages extends Component {

  constructor(props) {
    super(props);
    this.ScrollImages = React.createRef();
    this.reactScrollRef = React.createRef();

    this.playbackConst = 200;

    this.state = {
      index: 0
    };

	this.onWheel = this.onWheel.bind(this);
	this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    let options = {
      passive: false
    };
    //this.ScrollImages.current.addEventListener('wheel', this.onWheel, options);
  }

  componentWillUnmount() {
    //this.ScrollImages.current.removeEventListener('wheel', this.onWheel);
  }

  componentDidUpdate(prevProps, prevStates) {
  	this.reactScrollRef.current.style.height = Math.floor(this.props.data.length) * this.playbackConst + "px";
  }

  onWheel(e) {
  	e.preventDefault();

  	let index = this.state.index;
  	index += Math.floor(e.deltaY / 50);

  	if (index >= this.props.data.length) {
  		index = this.props.data.length - 1;
  	}
  	else if (index < 0) {
  		index = 0;
  	}

  	this.setState({index: index});
  }

  onScroll(e) {
  	let index = Math.floor(e.target.scrollTop / this.playbackConst);
  	console.log(index);
  	this.setState({index: index});
  }

  render() {
  	let index = this.state.index;
	return (
	  <div ref={this.ScrollImages} 
	  	onScroll={this.onScroll}
	  	style={{overflow: 'scroll', height: '100%', width: '100%'}}>
        <div ref={this.reactScrollRef}
          className='image-player'>
  	      <img className='single-image-in-seq' 
	  		src={this.props.data[index]} />
        </div>
      </div>
	);
  }
}

export default ScrollImages;

