import React, { Component } from 'react';

import ContentSlider from '../ContentSlider/ContentSlider';
import HamMenu from '../HamMenu';
import Tutorial from '../Tutorial';

import './RightSection.css';

class RightSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      	<div className='right-section'>
      		<ContentSlider />
          <HamMenu />
          <Tutorial />
      	</div>
    );
  }
}

export default RightSection;