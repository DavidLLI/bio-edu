import React, { Component } from 'react';

import { connect } from 'react-redux';
import store from '../reduxStates/stores/rootStore';
import { changeFocus, changePage } from '../reduxStates/actions/ScrollbarAction';

import { modules } from '../data';

import './TextDescription.css';

class TextDescription extends Component {
	constructor(props) {
    	super(props);
    }

    render() {
    	let { pageData, 
        currentPage, 
        currentModule, 
        currentSection } = store.getState();

    	return (
            <div className='text-description'>
                <div className='text-module'>
                    {modules[currentModule]}
                </div>
                <div className='text-section'>
                    {'Section ' + (currentSection + 1)}
                </div>
                <div className='text-section-subtitle'
                    dangerouslySetInnerHTML={{__html: pageData[currentModule][currentSection].pages[currentPage].title}}>
                </div>
                <div className='text-description-body'
                    dangerouslySetInnerHTML={{__html: pageData[currentModule][currentSection].pages[currentPage].text}}>
                </div>
            </div>
    	);
    }
}

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage,
    currentModule: state.currentModule,
    currentSection: state.currentSection
  }
}

export default connect(mapStateToProps)(TextDescription);