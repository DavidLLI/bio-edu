import React, { Component } from 'react';


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
          
      	</div>
    );
  }
}

export default RightSection;