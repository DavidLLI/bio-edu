import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../stores/rootStore';

import './InteractivePage.css';

import {ReactComponent as Circle} from '../assets/circle.svg';

class InteractivePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="interactive-page">
        {'Interface ' + (store.getState().currentPage + 1)}
        <div className='hint-button'>
        	<Circle className='svg-hint-button'/>
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

export default connect(mapStateToProps)(InteractivePage);


