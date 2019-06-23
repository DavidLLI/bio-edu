import React, { Component } from 'react';

import Lottie from 'react-lottie';

import store from '../reduxStates/stores/rootStore';
import { changePage } from '../reduxStates/actions/ScrollbarAction';

import {ReactComponent as PlayButton} from '../assets/assets-svg/play.svg';
import {ReactComponent as PauseButton} from '../assets/assets-svg/pause.svg';
import {ReactComponent as ReplayButton} from '../assets/assets-svg/replay-arrow.svg';
import {ReactComponent as PrevButton} from '../assets/assets-svg/previous-media.svg';
import {ReactComponent as NextButton} from '../assets/assets-svg/next-media.svg';

import './LottieController.css';

class LottieController extends Component {
	constructor(props) {
    	super(props);
        this.defaultOptions = {
            loop: false,
            autoplay: true,
            animationData: props.animation,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        this.buttonStyle = {
            display: 'block',
            margin: '10px auto'
        };

        this.state = {
            isStopped: false,
            isPaused: false,
            isComplete: false
        };

        this.handleComplete = this.handleComplete.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handlePauseClick = this.handlePauseClick.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    componentWillUpdate(prevProps, prevState) {
        this.defaultOptions.animationData = prevProps.animation;
    }

    handlePrev() {
        let { currentPage } = store.getState();
        store.dispatch(changePage(currentPage - 1));
    }

    handleNext() {
        let { currentPage } = store.getState();
        store.dispatch(changePage(currentPage + 1));
    }

    handleComplete() {
        this.setState({isPaused: true});
        this.setState({isComplete: true});
    }

    handlePauseClick() {
        if (this.state.isComplete) {
            this.handleRestart();
        }
        else {
            this.handlePause();
        }
    }

    handlePause() {
        this.setState({isPaused: !this.state.isPaused});
    }

    handleStop() {
        this.setState({isStopped: true});
    }

    handleRestart() {
        this.setState({isStopped: true});
        this.setState({isPaused: false});
        setTimeout(() => {
            this.setState({isStopped: false});
        }, 100);
        this.setState({isComplete: false});
    }

    render() {
        let { pageData, currentPage, currentSection, currentModule } = store.getState();

        let prevClass = '';
        if (currentPage === 0) {
            prevClass = ' disable';
        }

        let nextClass = '';
        if (currentPage === pageData[currentModule][currentSection].pages.length - 1) {
            nextClass = ' disabled';
        }

    	return (
            <div className='animationBox'>
                <Lottie options={this.defaultOptions}
                    height={'52.8vh'}
                    width={'53vw'}
                    isStopped={this.state.isStopped}
                    isPaused={this.state.isPaused}
                    eventListeners={[
                        {
                            eventName: 'complete',
                            callback: this.handleComplete
                        }
                    ]}/>
                <div className='controlButton'>
                    <PrevButton
                        className={'media-prev-button' + prevClass}
                        onClick={this.handlePrev} />
                    <ReplayButton
                        className='replayButton'
                        onClick={this.handleRestart}/>
                    {
                        this.state.isPaused ||
                        <PauseButton 
                            className='pauseButton'
                            onClick={this.handlePauseClick}/>
                    }
                    {
                        this.state.isPaused &&
                        <PlayButton 
                            className='pauseButton'
                            onClick={this.handlePauseClick}/>
                    }
                    <NextButton
                        className={'media-next-button' + nextClass}
                        onClick={this.handleNext} />
                </div>
            </div>
        );
    }
}

export default LottieController;