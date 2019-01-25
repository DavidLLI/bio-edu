import React, { Component } from 'react';

import './InteractivePage.css';

import {ReactComponent as Circle} from '../assets/circle.svg';

class InteractivePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="interactive-page">
        {'Interface ' + (this.props.currentPage)}
        <div className='hint-button'>
        	<Circle className='svg-hint-button'/>
        </div>
      </div>
    );
  }
}

export default InteractivePage;


