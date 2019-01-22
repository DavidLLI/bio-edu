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
	}

	handleClick(e, index) {
		this.setState({focus: index});
		this.props.onPageChange(index);
	}

  render() {
    return (
      <div onWheel={this.handleWheel} className="ScrollNav">
      	<ul>
	        {this.state.pageArr.map((page, index) => {
	        	let style = 'scroll-unfocus';
	        	if (index === Math.round(this.state.focus)) {
	        		style = 'scroll-focus';
	        	}
	        	else if (index === Math.round(this.state.focus) + 1 ||
	        			index === Math.round(this.state.focus) - 1) {
	        		style = 'scroll-1off';
	        	}
	        	else if (index === Math.round(this.state.focus) + 2 ||
	        			index === Math.round(this.state.focus) - 2) {
	        		style = 'scroll-2off';
	        	}
	        	return (
	        		<li key={index} 
	        			className={style + ' scroll-general'}
	        			onClick={(e) => this.handleClick(e, index)}>{page}</li>
	        	);
	        })}
        </ul>
      </div>
    );
  }
}

export default ScrollNav;