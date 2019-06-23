import React from 'react';
import ModalImage from 'react-modal-image'

import './Popup1.css';

import Image1 from '../Module 0_V01/Module01-01.jpg';

export default function (props) {
	return (
		<div className='popup-class-1'>
			<div className='popup-font-small'>
				Hello this is popup 1 small font
			</div>
			<img className='popup-image' src={Image1} />
			<ModalImage
			  className='popup-image'
			  small={Image1}
			  large={Image1}
			  hideDownload={true}
			/>
		      />
			<div className='popup-font-big'>
				Hello this is popup 1 big font
			</div>
		</div> 
	);
}