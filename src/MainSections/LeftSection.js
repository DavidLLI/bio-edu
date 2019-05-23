import React, { Component } from 'react';

import ButtonNav from '../ButtonNav/ButtonNav'

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
      			
      		</div> 
      	</div>
    );
  }
}

export default LeftSection;