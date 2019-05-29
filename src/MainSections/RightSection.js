import React, { Component } from 'react';

import NewScrollNav from '../ScrollNav/NewScrollNav';
import ContentSlider from '../ContentSlider/ContentSlider';

import './RightSection.css';

class RightSection extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      	<div className='right-section'>
      		<ContentSlider />
          <NewScrollNav />
      	</div>
    );
  }
}

export default RightSection;