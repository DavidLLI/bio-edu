import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from '@emotion/core';
// First way to import
import { ClipLoader } from 'react-spinners';

import store from '../reduxStates/stores/rootStore';
import { changePage, changeSection } from '../reduxStates/actions/ScrollbarAction';
import {ReactComponent as ReplayButton} from '../assets/assets-svg/replay-arrow.svg';
import {ReactComponent as PrevButton} from '../assets/assets-svg/previous-media.svg';
import {ReactComponent as NextButton} from '../assets/assets-svg/next-media.svg';

import './ScrollImages.css';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class ScrollImages extends Component {

  constructor(props) {
    super(props);
    this.ScrollImages = React.createRef();
    this.reactScrollRef = React.createRef();

    this.playbackConst = 50;

    this.state = {
      index: 0,
      imageIsReady: false,
      imageReadyCount: 0
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
    // Preload images
    let img = {};
    console.log('start loading');
    this.props.data.forEach((imageSrc, index) => {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        // when it finishes loading, update the component state
        this.setState({ imageReadyCount: this.state.imageReadyCount + 1 });
        if (this.state.imageReadyCount == this.props.data.length) {
          this.setState({ imageIsReady: true });
        }
        
      };
    });
  }

  componentWillUnmount() {
    //this.ScrollImages.current.removeEventListener('wheel', this.onWheel);
  }

  componentDidUpdate(prevProps, prevStates) {
    let { pageData, currentModule, currentSection, currentPage} = store.getState();
    if (currentModule !== prevProps.currentModule ||
        currentSection !== prevProps.currentSection ||
        currentPage !== prevProps.currentPage) {
      this.imageReadyCount = 0;
      this.setState({index: 0, imageIsReady: false});
    }
    if (this.reactScrollRef.current && this.state.imageIsReady && !prevStates.imageIsReady) {
  	 this.reactScrollRef.current.style.height = window.innerHeight + this.props.data.length * this.playbackConst + "px";
    }
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
    let imageIsReady = this.state.imageIsReady;
  	return (
      <div >
      { 
        imageIsReady &&
    	  <div ref={this.ScrollImages}
    	  	onScroll={this.onScroll}
          className='scroll-images'
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
      }
     

      {
        imageIsReady || 
          <div className='sweet-loading'>
            <ClipLoader
              css={override}
              sizeUnit={"px"}
              size={70}
              color={'#005F93'}
              loading={!imageIsReady}
            />
            {(this.state.imageReadyCount / this.props.data.length * 100).toFixed(2) + '%'}
          </div> 
      }
      </div>
  	);
  }
}

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage,
    currentModule: state.currentModule,
    currentSection: state.currentSection,
  }
}

export default connect(mapStateToProps)(ScrollImages);

