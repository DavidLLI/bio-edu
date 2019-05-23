import React, { Component } from 'react';

import LeftSection from './MainSections/LeftSection';
import RightSection from './MainSections/RightSection';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <div className='left-side'>
          <LeftSection />
        </div>
        <div className='right-side'>
          <RightSection />
        </div>
      </div>
    );
  }
}

export default App;
