import React from 'react';

//pop-up-images import
import Image17 from '../../assets/PopupWin/introntypes-01-min.jpg';

import './Popup2.css';

export default function (props) {
	return (
		<div className='popup-class-1'>

			<div className='popup-font-big'>
				<b>Intron representations</b> <br/><br/>
			</div>

			<div className='popup-font-small'>
			   
               Other visual methods indicated the removed introns include dotted lines or interruptions that are connected by a “V” shape (Figure 12). <br/><br/>
               <b>Figure 12:</b>
               <img className='popup-image' src={Image17} /> <br/><br/><br/>
               
		

			</div>


		</div> 
	);
}