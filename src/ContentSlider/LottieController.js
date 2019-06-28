import React, { Component } from 'react';

import Lottie from 'react-lottie';

import store from '../reduxStates/stores/rootStore';
import { changePage, changeSection } from '../reduxStates/actions/ScrollbarAction';

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
            isPaused: true,
            isComplete: false
        };

        this.handleComplete = this.handleComplete.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handlePauseClick = this.handlePauseClick.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isComplete !== this.state.isComplete) {
            this.props.animationStatusChange(this.state.isComplete);
        }
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

    handleComplete() {
        this.setState({isPaused: true});
        this.setState({isComplete: true});
    }

    handlePauseClick() {
        if (this.state.isComplete) {
            this.handleRestart();
        }
        else if (!this.state.isPaused) {
            this.handlePause();
        }
        else if (this.state.isPaused) {
            this.handlePlay();
        }
    }

    handlePause() {
        this.setState({isPaused: true});
    }

    handlePlay() {
        this.setState({isStopped: false});
        this.setState({isPaused: false});
    }

    handleStop() {
        this.setState({isStopped: true});
        this.setState({isPaused: true});
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
        this.defaultOptions.animationData = this.props.animation;
        this.defaultOptions.autoplay = !this.props.noAutoplay;
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

    	return (
            <div className='animationBox'>
                <Lottie options={this.defaultOptions}
                    height={'440px'}
                    width={'730px'}
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