import React from 'react';

//pop-up-images import
import Image29 from '../../assets/PopupWin/splicing types-03-min.jpg';
import Image30 from '../../assets/PopupWin/alternative splicing-02-min.jpg';

import './Popup2.css';

export default function (props) {
	return (
		<div className='popup-class-1'>

			<div className='popup-font-big'>
				<b>Variation in RNA splicing</b> <br/><br/>
			</div>

			<div className='popup-font-small'>
			   
               Constitutive splicing is the classical method of RNA splicing pertains to the way that viral RNAs are spliced in the same way every time during the RNA splicing and itself is not sufficient for the RNA diversity. In order to achieve the diversity of RNA transcripts, alternative splicing is used to produce different protein products with the same encoded gene. 
               <br/><br/>
               <img className='popup-image' src={Image29} /> <br/><br/><br/>

               Three common alternative splicing examples are explained here:  <br/><br/><b>Exon skipping</b>: bypassing the exon 2 and joining the exon 1 and 3 together. <br/><br/><b>Alternative donor site splicing</b>: An alternative 5 prime splice junction (donor site) is used, changing the 3 prime boundary of the upstream exon. <br/><br/><b>Alternative acceptor site splicing</b>: An alternative 3 prime splice junction (acceptor site) is used, changing the 5 prime boundary of the downstream exon.<br/><br/><br/>
               <img className='popup-image' src={Image30} /> <br/><br/>

			</div>


		</div> 
	);
}