import React, { Component } from 'react';
import BlockImage from 'react-block-image';

import LottieController from '../ContentSlider/LottieController';
import PopupWindow from '../PopupWindow/PopupWindow';

import { ReactComponent as SliderIcon } from '../assets/assets-svg/move.svg';

import './ImageSlider.css';

class ContentSlider extends Component {
	constructor(props) {
    	super(props);

    	this.state = {
    		progress: 0
    	};

    	this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);

    }

    handleMouseDown(e) {
        e.preventDefault();
        window.addEventListener('mouseup', this.handleMouseUp);
        window.addEventListener('mousemove', this.handleMouseMove);
    }

    handleMouseUp(e) {
        e.preventDefault();
        window.removeEventListener('mouseup', this.handleMouseUp);
        window.removeEventListener('mousemove', this.handleMouseMove);
    }

    handleMouseMove(e) {
        let windowWidth = window.innerWidth;
        if ((e.pageX - windowWidth * 0.385) / windowWidth / 0.65 <= 0.9 &&
            (e.pageX - windowWidth * 0.385) / windowWidth / 0.65 >= 0) {
        	this.setState({ progress: (e.pageX - windowWidth * 0.385)/ windowWidth / 0.65 });
        }
        else if ((e.pageX - windowWidth * 0.385) / windowWidth / 0.65 < 0) {
        	this.setState({ progress: 0 });
        }
        else if ((e.pageX - windowWidth * 0.385) / windowWidth / 0.65 > 0.9) {
        	this.setState({ progress: 0.9 });
        }
        
    }

    render() {
    	return (
            <div className='image-slider'
            	style={{ width: '58vw' }}>
            	{ !this.props.after || 
            		<div  
                    	className='vertical-separator'
                    	style={{ left: `${100 * this.state.progress}%` }}>
	                    <SliderIcon 
	                        onMouseDown={this.handleMouseDown} 
	                        className='slider-icon' />
	                </div>
            	}
            	
        		<LottieController 
                    ref={this.props.before.animationRef}
                    animation={this.props.before.animation}
                    noAutoplay={this.props.before.animationNoAutoplay}
                    animationStatusChange={this.props.animationStatusChange} />
              {this.props.data.popup &&
                <PopupWindow 
                  data={ this.props.data.popup }
                  modalOpen={ this.props.modalOpen }
                  modalClose={ this.props.modalClose }
                  show={ this.props.show }/>
              }
            	<div className='image-after'
            		style={{ width: `${100 * this.state.progress}%` }}>
            		<BlockImage 
                        className='image-container'
                        backgroundSize='contain'
                        src={this.props.after}
                        style={{width: '58vw'}} />
            	</div>
            </div>
    	);
    }
}

export default ContentSlider;