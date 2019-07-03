import React, { Component } from 'react';

import store from '../reduxStates/stores/rootStore';
import { changePage, changeSection } from '../reduxStates/actions/ScrollbarAction';
import {ReactComponent as ReplayButton} from '../assets/assets-svg/replay-arrow.svg';
import {ReactComponent as PrevButton} from '../assets/assets-svg/previous-media.svg';
import {ReactComponent as NextButton} from '../assets/assets-svg/next-media.svg';

import './ScrollImages.css';

class ScrollImages extends Component {

  constructor(props) {
    super(props);
    this.ScrollImages = React.createRef();
    this.reactScrollRef = React.createRef();

    this.playbackConst = 20;

    this.state = {
      index: 0
    };

	this.onWheel = this.onWheel.bind(this);
	this.onScroll = this.onScroll.bind(this);
	this.handlePrev = this.handlePrev.bind(this);
	this.handleNext = this.handleNext.bind(this);
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
  	this.reactScrollRef.current.style.height = window.innerHeight + this.props.data.length * this.playbackConst + "px";
  }

  onWheel(e) {
  	e.preventDefault();
  	let index = this.state.index;
  	index += Math.round(e.deltaY / 50);

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
    if (index >= this.props.data.length) {
      index = this.props.data.length - 1;
    }
  	this.setState({index: index});
  }

  handlePrev() {
    let { pageData, currentModule, currentSection, currentPage } = store.getState();
    let currentSectionLength = pageData[currentModule][currentSection].pages.length;
    if (currentPage === 0) {
        store.dispatch(changeSection(currentSection - 1));
        let newCurrentSection = store.getState().currentSection;
        if (newCurrentSection !== currentSection) {
            currentSectionLength = pageData[currentModule][newCurrentSection].pages.length;
            store.dispatch(changePage(currentSectionLength - 1));
        }
    }
    else {
        store.dispatch(changePage(currentPage - 1));
    }
  }

  handleNext() {
    let { pageData, currentModule, currentSection, currentPage } = store.getState();
    let currentSectionLength = pageData[currentModule][currentSection].pages.length;
    if (currentPage === currentSectionLength - 1) {
        store.dispatch(changeSection(currentSection + 1));
    }
    else {
        store.dispatch(changePage(currentPage + 1));
    }
  }

  render() {
  	let { pageData, currentPage, currentSection, currentModule } = store.getState();

    let prevClass = '';
    if (currentPage === 0 && currentSection === 0) {
        prevClass = ' disabled';
    }

    let nextClass = '';
    if (currentPage === pageData[currentModule][currentSection].pages.length - 1 &&
        currentSection === pageData[currentModule].length - 1) {
        nextClass = ' disabled';
    }

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
        <div className='image-controlButton'>
            <PrevButton
                className={'image-media-prev-button' + prevClass}
                onClick={this.handlePrev} />
            <ReplayButton
                className='image-replayButton'
                onClick={() => {this.ScrollImages.current.scrollTop = 0}} />
            <NextButton
                className={'image-media-next-button' + nextClass}
                onClick={this.handleNext} />
        </div>
      </div>
	);
  }
}

export default ScrollImages;

