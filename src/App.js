import React, { Component } from 'react';

import LeftSection from './MainSections/LeftSection';
import RightSection from './MainSections/RightSection';
import NewScrollNav from './ScrollNav/NewScrollNav';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <div className='modal-backdrop' id='backdrop-modal'/>
        <div className='left-side'>
          <LeftSection />
        </div>
        <div className='right-side'>
          <RightSection />
        </div>
        <div className='scroll-app'>
          <NewScrollNav />
        </div>
      </div>
    );
  }
}

export default App;
