import React, { Component } from 'react';


import ContentSlider from '../ContentSlider/ContentSlider';
import HamMenu from '../HamMenu';

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
      	</div>
    );
  }
}

export default RightSection;