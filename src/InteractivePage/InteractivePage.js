import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../stores/rootStore';

import './InteractivePage.css';

import {ReactComponent as Circle} from '../assets/circle.svg';

class InteractivePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'Clicked': false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({'Clicked': true});
  }

  render() {
    let hintClassName = '';
    if (!this.state.Clicked) {
      hintClassName = ' svg-hint-button-unclicked';
    }
    return (
      <div className="interactive-page">
        {'Interface ' + (store.getState().currentPage + 1)}
        <div className='hint-button'>
        	<Circle className={'svg-hint-button' + hintClassName}
                  onClick={this.handleClick}/>
        </div>
        {!this.state.Clicked || 
          <div className='text-bar'>
            Button Clicked
          </div>
        }
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


