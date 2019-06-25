import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../reduxStates/stores/rootStore';
import { changeFocus, changePage, changeSection } from '../reduxStates/actions/ScrollbarAction';

import {ReactComponent as BackButton} from '../assets/assets-svg/back-button.svg';
import {ReactComponent as NextButton} from '../assets/assets-svg/next-button.svg';

import './ButtonNav.css';

class ButtonNav extends Component {
	constructor(props) {
	    super(props);

	    this.handlePrev = this.handlePrev.bind(this);
	    this.handleNext = this.handleNext.bind(this);
	}

	handlePrev() {
        let { pageData, currentModule, currentSection, currentPage } = store.getState();
        let currentSectionLength = pageData[currentModule][currentSection].pages.length;
        if (currentPage === 0) {
            store.dispatch(changeSection(currentSection - 1));
            let newCurrentSection = store.getState().currentSection;
            if (newCurrentSection !== currentSection) {
                currentSectionLength = pageData[currentModule][newCurrentSection].pages.length;
                store.dispatch(changePage(currentSectionLength - 1));
            }
        }
        else {
            store.dispatch(changePage(currentPage - 1));
        }
    }

    handleNext() {
        let { pageData, currentModule, currentSection, currentPage } = store.getState();
        let currentSectionLength = pageData[currentModule][currentSection].pages.length;
        if (currentPage === currentSectionLength - 1) {
            store.dispatch(changeSection(currentSection + 1));
        }
        else {
            store.dispatch(changePage(currentPage + 1));
        }
    }

  	render() {
  		let { pageData, 
  			currentPage, 
  			currentModule, 
  			currentSection } = store.getState();

  		let currentSectionLength = pageData[currentModule][currentSection].pages.length;

	    let prevClass = '';
        if (currentPage === 0 && currentSection === 0) {
            prevClass = ' disabled';
        }

        let nextClass = '';
        if (currentPage === pageData[currentModule][currentSection].pages.length - 1 &&
            currentSection === pageData[currentModule].length - 1) {
            nextClass = ' disabled';
        }

        let aggreCurrentPage = currentPage;
        let totalPage = 0;

        pageData[currentModule].forEach((section, index) => {
        	if (index < currentSection) {
        		aggreCurrentPage += section.pages.length;
        	}
        	totalPage += section.pages.length;
        });

	    let currentPageStr = '';
	    if (aggreCurrentPage < 9) {
	    	currentPageStr = '' + '0' + (aggreCurrentPage + 1);
	    }
	    else {
	    	currentPageStr = '' + (aggreCurrentPage + 1);
	    }

	    let pageLengthStr = '';
	    if (totalPage < 9) {
	    	pageLengthStr = '' + '0' + totalPage;
	    }
	    else {
	    	pageLengthStr = '' + totalPage;
	    }

	    return (
	    	<div className='navigation-buttons'>
	            <div className='back-button'>
	              <BackButton className={'back-button-svg' + prevClass} 
	                          onClick={this.handlePrev}/>
	            </div>
	            <div className='current-page'>
	            	{currentPageStr + '/' + pageLengthStr}
	            </div>
	            <div className='next-button'>
	              <NextButton className={'next-button-svg' + nextClass}
	                          onClick={this.handleNext}/>
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
