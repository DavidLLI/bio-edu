import React, { Component } from 'react';

import ScrollNav from './ScrollNav/ScrollNav';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="scroll-nav">
          <ScrollNav />
        </div>
      </div>
    );
  }
}

export default App;
