import React, { Component } from 'react';

import './ScrollNav.css';

class ScrollNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			'pageArr': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			'focus': 0
		};

		this.handleWheel = this.handleWheel.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleWheel(e) {
		let focusAfter = this.state.focus + (e.deltaY / 200);
		if (focusAfter > 9) {
			focusAfter = 9;
		}
		if (focusAfter < 0) {
			focusAfter = 0;
		}
		this.setState({focus: focusAfter});
		e.preventDefault();
	}

	handleClick(e, index) {
		this.setState({focus: index});
		this.props.onPageChange(index);
	}

	calculateFontSize(index, focus) {
		let fontSize = 60 - 10 * Math.abs(focus - index);
    	if (index <= Math.round(focus) + 1 &&
    			index >= Math.round(focus) - 1) {
    		fontSize = 100 - 30 * Math.abs(focus - index);
    	}
    	else if (index <= Math.round(focus) + 2 &&
    			index >= Math.round(focus) - 2) {
    		fontSize = 85 - 20 * Math.abs(focus - index);
    	}
    	fontSize = Math.max(fontSize, 0);
    	return fontSize;
	}

  render() {
    return (
      <div onWheel={this.handleWheel} 
      		className="ScrollNav">
      	<label className='pointer'>
      		-----------------
      	</label>
      	<ul>
	        {this.state.pageArr.map((page, index) => {
	        	let fontSize = this.calculateFontSize(index, this.state.focus);
	        	let opacity = Math.max(0, (fontSize - 40)) / 60;
	        	let ulPosition = -100 * (this.state.focus - index);
	        	if (index < this.state.focus) {
	        		ulPosition = -65 * (this.state.focus - index);
	        	}
	        	let selected = '';

	        	if (this.props.currentPage === index) {
	        		selected = ' nav-selected';
	        	}
	        	return (
	        		<li key={index} 
	        			className={'scroll-general' + selected}
	        			style={{fontSize: fontSize, opacity: opacity, top: ulPosition}}
	        			onClick={(e) => this.handleClick(e, index)}>{page}</li>
	        	);
	        })}
        </ul>
      </div>
    );
  }
}

export default ScrollNav;