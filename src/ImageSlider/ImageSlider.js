import React, { Component } from 'react';
import BlockImage from 'react-block-image';

import SliderIcon from '../assets/slider.png';

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
        if (e.pageX / windowWidth / 0.6 <= 1) {
        	this.setState({ progress: e.pageX / windowWidth / 0.6 });
        }
        else if (e.pageX / windowWidth / 0.6 < 0) {
        	this.setState({ progress: 0 });
        }
        else if (e.pageX / windowWidth / 0.6 > 1) {
        	this.setState({ progress: 1 });
        }
        
    }

    render() {
    	return (
            <div className='image-slider'
            	style={{ width: '60vw' }}>
            	{ !this.props.after || 
            		<div  
                    	className='vertical-separator'
                    	style={{ left: `${100 * this.state.progress}%` }}>
	                    <img 
	                        onMouseDown={this.handleMouseDown}
	                        src={SliderIcon} 
	                        className='slider-icon' />
	                </div>
            	}
            	
        		<BlockImage 
        			className='image-container'
        			src={this.props.before}
        			backgroundSize='contain'/>
            	<div className='image-after'
            		style={{ width: `${100 * this.state.progress}%` }}>
            		<BlockImage
            			className='image-container'
            			src={this.props.after}
            			style={{ width: '60vw' }}
            			backgroundSize='contain' />
            	</div>
            </div>
    	);
    }
}

export default ContentSlider;