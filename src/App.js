import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './stores/rootStore';
import { changeFocus, changePage } from './actions/ScrollbarAction';

import ScrollNav from './ScrollNav/ScrollNav';
import InteractivePage from './InteractivePage/InteractivePage';

import './App.css';

import {ReactComponent as BackButton} from './assets/back-button.svg';
import {ReactComponent as NextButton} from './assets/next-button.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'pageSubtitles': ['Subtitle', 'Subtitle', 'Subtitle', 'Subtitle', 'Subtitle', 'Subtitle', 'Subtitle', 'Subtitle', 'Subtitle', 'Subtitle']
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    if (page >=0 && page < this.state.pageSubtitles.length) {
      store.dispatch(changeFocus(page));
      store.dispatch(changePage(page));
    }
  }

  render() {
    return (
      <div className="App">
        <div className="scroll-nav">
          <ScrollNav
            pageSubtitles={this.state.pageSubtitles} />
        </div>
        <div className='content-right'>
          <div className='navigation-buttons'>
            <div className='back-button'>
              <BackButton className='back-button-svg' 
                          onClick={() => this.changePage(store.getState().currentPage - 1)}/>
            </div>
            <div className='between-button-blank' />
            <div className='next-button'>
              <NextButton className='next-button-svg'
                          onClick={() => this.changePage(store.getState().currentPage + 1)}/>
            </div>
          </div>
          <div className="interface-page">
            <InteractivePage />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App);
