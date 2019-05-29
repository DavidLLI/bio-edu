import React, { Component } from 'react';

import { connect } from 'react-redux';
import store from '../reduxStates/stores/rootStore';
import { changeFocus, changePage } from '../reduxStates/actions/ScrollbarAction';

import './TextDescription.css';

class TextDescription extends Component {
	constructor(props) {
    	super(props);
    }

    render() {
    	let content = store.getState().pageData;
        let currentPage = store.getState().currentPage;

    	return (
            <div className='text-description'>
                <div className='text-module'>
                    {'Module ' + content[currentPage].module}
                </div>
                <div className='text-section'>
                    {'Section ' + content[currentPage].section}
                </div>
                <div className='text-section-subtitle'>
                    {content[currentPage].subtitle}
                </div>
                <div className='text-description-body'>
                    {content[currentPage].text}
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

export default connect(mapStateToProps)(TextDescription);