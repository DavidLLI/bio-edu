import React, { Component } from 'react';

import ButtonNav from '../ButtonNav/ButtonNav'
import TextDescription from '../TextDescription/TextDescription';

import HomeLogo from '../assets/assets-svg/logo.png';
import { ReactComponent as ShareLogo } from '../assets/assets-svg/share.svg';

import introJs from 'intro.js';
import 'intro.js/introjs.css';

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
            <div className='home-logo'>
              <img src={HomeLogo} className='home-logo-svg' />
            </div>
            <div className='share-logo'>
              <ShareLogo className='share-logo-svg' />
              Share
            </div>
      			<TextDescription />
      		</div> 
      	</div>
    );
  }
}

export default LeftSection;