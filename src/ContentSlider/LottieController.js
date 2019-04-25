import React, { Component } from 'react';

import Lottie from 'react-lottie';
import * as animationData1 from '../assets/Animation/animation1.json';

import {ReactComponent as NextButton} from '../assets/assets-svg/next-button.svg';

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
    }

    render() {
        console.log(this.defaultOptions.animationData)
    	return (
            <div className='animationBox'>
                <Lottie options={this.defaultOptions}
                    height={'70vh'}
                    width={'70vw'}
                    isStopped={this.state.isStopped}
                    isPaused={this.state.isPaused}/>
                <button style={this.buttonStyle} onClick={() => this.setState({isStopped: true})}>stop</button>
                <button style={this.buttonStyle} onClick={() => this.setState({isStopped: false})}>play</button>
                <button style={this.buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>pause</button>
            </div>
        );
    }
}

export default (LottieController);