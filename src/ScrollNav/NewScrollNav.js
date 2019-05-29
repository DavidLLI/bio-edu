import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { changeFocus, changePage } from '../reduxStates/actions/ScrollbarAction';
import store from "../reduxStates/stores/rootStore";

import './ScrollNav.css';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class NewScrollNav extends React.Component {

  constructor(props) {
    super(props);

    let pageArr = _.range(1, store.getState().pageData.length + 1);
	this.state = {
		'pageArr': pageArr
	};

    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo(name) {
    scroller.scrollTo('50', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer(name) {

	scroller.scrollTo(name, {
	    duration: 300,
	    delay: 0,
	    smooth: 'easeInOutQuart',
	    containerId: 'ScrollArea'
	});

  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div className="ScrollNav">
      	<div className='pointer'>
      	</div>
      	<Element id='ScrollArea' className='ScrollArea'>
	        {this.state.pageArr.map((page, index) => {
	        	return (
        			<Element 
        				key={index}
    					className='page-number' 
    					name={'' + page}
    					onClick={() => this.scrollToWithContainer('' + page)}>
        				{page}
        			</Element>
	        	);
	        })}
	    </Element>
      </div>
    );
  }
};

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
)(NewScrollNav);

export default VisibleScrollNav;