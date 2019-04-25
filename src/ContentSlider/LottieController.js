import React, { Component } from 'react';

import Lottie from 'react-lottie';
import * as animationData1 from '../assets/Animation/animation1.json';

import {ReactComponent as PlayButton} from '../assets/assets-svg/play.svg';
import {ReactComponent as PauseButton} from '../assets/assets-svg/pause.svg';
import {ReactComponent as ReplayButton} from '../assets/assets-svg/replay-arrow.svg';

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
            isPaused: false
        };

        this.handleComplete = this.handleComplete.bind(this);
    }

    handleComplete() {
        console.log('here');
        this.setState({isPaused: true});
    }

    render() {
    	return (
            <div className='animationBox'>
                <Lottie options={this.defaultOptions}
                    height={'70vh'}
                    width={'70vw'}
                    isStopped={this.state.isStopped}
                    isPaused={this.state.isPaused}
                    eventListeners={[
                        {
                            eventName: 'complete',
                            callback: this.handleComplete
                        }
                    ]}/>
                <div className='controlButton'>
                    <ReplayButton
                        className='replayButton'
                        onClick={() => {
                            this.setState({isStopped: true});
                            this.setState({isPaused: false});
                            setTimeout(() => {
                                this.setState({isStopped: false});
                            }, 100);
                    }}/>
                    {
                        this.state.isPaused ||
                        <PauseButton 
                            className='pauseButton'
                            onClick={() => this.setState({isPaused: !this.state.isPaused})}/>
                    }
                    {
                        this.state.isPaused &&
                        <PlayButton 
                            className='pauseButton'
                            onClick={() => this.setState({isPaused: !this.state.isPaused})}/>
                    }
                </div>
            </div>
        );
    }
}

export default (LottieController);