import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { changeFocus, changePage } from '../reduxStates/actions/ScrollbarAction';
import store from "../reduxStates/stores/rootStore";

import './ScrollNav.css';

class ScrollNav extends Component {
	constructor(props) {
		super(props);
		let pageArr = _.range(1, store.getState().pageData.length + 1);
		this.state = {
			'pageArr': pageArr
		};

		this.handleWheel = this.handleWheel.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleWheel(e) {
		let pageData = store.getState().pageData;
		let focusAfter = store.getState().focus + (e.deltaY / 200);
		if (focusAfter > pageData.length - 1) {
			focusAfter = pageData.length - 1;
		}
		if (focusAfter < 0) {
			focusAfter = 0;
		}
		store.dispatch(changeFocus(focusAfter));
		e.preventDefault();
	}

	handleClick(e, index) {
		store.dispatch(changePage(index));
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
      		-----------------------------------
      	</label>
      	<ul>
	        {this.state.pageArr.map((page, index) => {
	        	let fontSize = this.calculateFontSize(index, store.getState().focus);
	        	let opacity = Math.max(0, (fontSize - 40)) / 60;
	        	let ulPosition = -100 * (store.getState().focus - index);
	        	if (index < store.getState().focus) {
	        		ulPosition = -65 * (store.getState().focus - index);
	        	}
	        	let selected = '';

	        	if (store.getState().currentPage === index) {
	        		selected = ' nav-selected';
	        	}
	        	return (
	        		<li key={index} 
	        			className={'scroll-general' + selected}
	        			style={{opacity: opacity}}
	        			onClick={(e) => this.handleClick(e, index)}>
	        			<div className='scroll-item'>
		        			<label className='page-number'
		        					style={{fontSize: fontSize, top: ulPosition}}>
		        				{page}
		        			</label>
		        			
	        			</div>
	        		</li>
	        	);
	        })}
        </ul>
      </div>
    );
  }
}

/*
<label className='page-title'
		style={{fontSize: fontSize * 0.5, top: ulPosition + fontSize * 0.4}}>
	{store.getState().pageData[index].title}
</label>
*/

const mapStateToProps = state => {
  return {
    focus: state.focus,
    currentPage: state.currentPage,
    sliding: state.sliding
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeFocus: focus => {
      dispatch(changeFocus(focus))
    }
  }
}

const VisibleScrollNav = connect(
  	mapStateToProps,
  	mapDispatchToProps
)(ScrollNav);

export default VisibleScrollNav;