import React, { Component } from 'react';

import ButtonNav from '../ButtonNav/ButtonNav'
import TextDescription from '../TextDescription/TextDescription';

import './LeftSection.css';

class LeftSection extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      	<div className='left-section'>
      		<div className='navigation-arrows'>
      			<ButtonNav />
      		</div>
      		<div className='left-text'>
      			<TextDescription />
      		</div> 
      	</div>
    );
  }
}

export default LeftSection;