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

    this.timerUniqueID = false;

    let pageArr = store.getState().pageData;
  	this.state = {
  		'pageArr': pageArr,
      'active': false
  	};

    this.scrollDivRef = React.createRef();
    this.scrollToTop = this.scrollToTop.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', (to, element) => {
      console.log("begin", to, element);
    });

    Events.scrollEvent.register('end', (to, element) => {
      console.log("end", to, element);
    });

  }

  componentDidUpdate(prevProps) {
    let currentPage = store.getState().currentPage;
    this.currentScrollPos = currentPage;
    this.scrollToWithContainer('' + (currentPage + 1));

    if (this.state.active) {
      document.getElementById('backdrop-modal').style.opacity = 0.5;
    }
    else {
      document.getElementById('backdrop-modal').style.opacity = 0;
    }

  }

  handleScroll() {
    if (this.scrollDivRef.current) {
      console.log(this.scrollDivRef.current.childBindings.domNode.childNodes[0].offsetHeight);
      let pageNumberOffset = this.scrollDivRef.current.childBindings.domNode.childNodes[0].offsetHeight;
      let currentScroll = this.scrollDivRef.current.childBindings.domNode.scrollTop;
      let currentPageNumberRound = Math.round(currentScroll / (pageNumberOffset));
      console.log(currentScroll / (pageNumberOffset));

      if (this.timerUniqueID) {
        clearTimeout(this.timerUniqueID);
        this.timerUniqueID = false;
      }

      this.timerUniqueID = setTimeout(() => {
          this.scrollToWithContainer('' + (currentPageNumberRound + 1));
          this.timerUniqueID = false;
      }, 200);
    }
  }

  handleChangePage(page) {
    store.dispatch(changePage(page - 1));
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
    let pageNumberOffset = this.scrollDivRef.current.childBindings.domNode.childNodes[0].offsetHeight;
  	scroller.scrollTo(name, {
  	    duration: 300,
  	    delay: 0,
        offset: -0.49 * window.innerHeight,
  	    smooth: 'easeInOutQuart',
  	    containerId: 'ScrollArea'
  	});

  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    
    let currentPage = store.getState().currentPage;
    console.log(this.state.active);
    return (

      <div className={this.state.active ? 'ScrollNav active' : 'ScrollNav'}
            onMouseEnter={() => {this.setState({active: true})}}
            onMouseLeave={() => {this.setState({active: false})}}>

      	<Element id='ScrollArea' 
            className={'ScrollArea'}
            ref={this.scrollDivRef} 
            onScroll={this.handleScroll}

            >
            
	        {this.state.pageArr.map((page, index) => {
            let selected = ' ';

            if (currentPage === index) {
              selected += 'page-selected';
            }

            let paddedIndex = index + 1;
            if (paddedIndex < 10) {
              paddedIndex = '0' + paddedIndex;
            }

	        	return (
        			<Element
        			  key={index}
    					  className={'page-row' + selected}
    					  name={'' + (index + 1)}
    					  onClick={() => this.handleChangePage(index + 1)}>
                <div className={'page-number' + selected}>
                  {paddedIndex}
                </div>
                <div className={'page-title' + selected}>
                  {page.title}
                </div>
        			</Element>
	        	);
	        })}
          <div className={this.state.active ? 'background-nav  active' : 'background-nav'} />
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