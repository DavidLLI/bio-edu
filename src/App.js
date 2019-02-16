import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './reduxStates/stores/rootStore';
import { changeFocus, changePage } from './reduxStates/actions/ScrollbarAction';

import ScrollNav from './ScrollNav/ScrollNav';
import ButtonNav from './ButtonNav/ButtonNav';
import InteractivePage from './InteractivePage/InteractivePage';
import ContentSlider from './ContentSlider/ContentSlider';

import './App.css';

import {ReactComponent as BackButton} from './assets/back-button.svg';
import {ReactComponent as NextButton} from './assets/next-button.svg';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <ContentSlider />
        <div className="scroll-nav">
          <ScrollNav />
        </div>
        <div className='content-right'>
          <ButtonNav />
        </div>
      </div>
    );
  }
}

export default App;
