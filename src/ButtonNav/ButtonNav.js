import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../reduxStates/stores/rootStore';
import { changeFocus, changePage } from '../reduxStates/actions/ScrollbarAction';

import {ReactComponent as BackButton} from '../assets/assets-svg/back-button.svg';
import {ReactComponent as NextButton} from '../assets/assets-svg/next-button.svg';

import './ButtonNav.css';

class ButtonNav extends Component {
	constructor(props) {
	    super(props);

	    this.changePage = this.changePage.bind(this);
	}

	changePage(page) {
      	store.dispatch(changePage(page));
  	}

  	render() {
  		let { pageData, 
  			currentPage, 
  			currentModule, 
  			currentSection } = store.getState();

	    let backButtonDisable = '';
	    let nextButtonDisable = '';
	    if (currentPage === 0) {
	      	backButtonDisable = ' disabled';
	    }
	    if (currentPage === pageData[currentModule][currentSection].pages.length - 1) {
	      	nextButtonDisable = ' disabled';
	    }

	    let currentPageStr = '';
	    if (currentPage < 9) {
	    	currentPageStr = '' + '0' + (currentPage + 1);
	    }
	    else {
	    	currentPageStr = '' + (currentPage + 1);
	    }

	    let pageLengthStr = '';
	    if (pageData[currentModule][currentSection].pages.length < 9) {
	    	pageLengthStr = '' + '0' + pageData[currentModule][currentSection].pages.length;
	    }
	    else {
	    	pageLengthStr = '' + pageData[currentModule][currentSection].pages.length;
	    }

	    return (
	    	<div className='navigation-buttons'>
	            <div className='back-button'>
	              <BackButton className={'back-button-svg' + backButtonDisable} 
	                          onClick={() => this.changePage(currentPage - 1)}/>
	            </div>
	            <div className='current-page'>
	            	{currentPageStr + '/' + pageLengthStr}
	            </div>
	            <div className='next-button'>
	              <NextButton className={'next-button-svg' + nextButtonDisable}
	                          onClick={() => this.changePage(currentPage + 1)}/>
	            </div>
	        </div>
	    );
  	}
}

const mapStateToProps = state => {
	return {
		sliding: state.sliding,
	    currentPage: state.currentPage,
	    currentSection: state.currentSection,
	    currentModule: state.currentModule
	}
}

export default connect(mapStateToProps)(ButtonNav);
