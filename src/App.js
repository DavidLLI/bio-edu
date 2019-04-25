import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './reduxStates/stores/rootStore';
import { changeFocus, changePage } from './reduxStates/actions/ScrollbarAction';

import ScrollNav from './ScrollNav/ScrollNav';
import ButtonNav from './ButtonNav/ButtonNav';
import InteractivePage from './InteractivePage/InteractivePage';
import ContentSlider from './ContentSlider/ContentSlider';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <div className="scroll-nav">
          <ScrollNav />
        </div>
        <div className='content-right'>
          <ContentSlider />
          <ButtonNav />
        </div>
      </div>
    );
  }
}

export default App;
