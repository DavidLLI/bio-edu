import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../reduxStates/stores/rootStore';
import { changeFocus, changePage } from '../reduxStates/actions/ScrollbarAction';

import {ReactComponent as BackButton} from '../assets/back-button.svg';
import {ReactComponent as NextButton} from '../assets/next-button.svg';

import './ButtonNav.css';

class ButtonNav extends Component {
	constructor(props) {
	    super(props);

	    this.changePage = this.changePage.bind(this);
	}

	changePage(page) {
    	if (page >= 0 && page < store.getState().pageSubtitles.length) {
      		store.dispatch(changeFocus(page));
      		store.dispatch(changePage(page));
    	}
  	}

  	render() {
  		let pageSubtitles = store.getState().pageSubtitles;
	    let currentPage = store.getState().currentPage;

	    let backButtonDisable = '';
	    let nextButtonDisable = '';
	    if (currentPage === 0) {
	      	backButtonDisable = ' disabled';
	    }
	    if (currentPage === pageSubtitles.length - 1) {
	      	nextButtonDisable = ' disabled';
	    }

	    return (
	    	<div className='navigation-buttons'>
	            <div className='back-button'>
	              <BackButton className={'back-button-svg' + backButtonDisable} 
	                          onClick={() => this.changePage(currentPage - 1)}/>
	            </div>
	            <div className='between-button-blank' />
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
	    currentPage: state.currentPage
	}
}

export default connect(mapStateToProps)(ButtonNav);
