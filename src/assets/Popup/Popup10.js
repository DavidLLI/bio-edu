import React from 'react';

//pop-up-images import
import Image28 from '../../assets/PopupWin/alternative poly-A-01-min.jpg';

import './Popup2.css';

export default function (props) {
	return (
		<div className='popup-class-1'>

			<div className='popup-font-big'>
				<b>Alternative polyadenylation mechanism</b> <br/><br/>
			</div>

			<div className='popup-font-small'>


			 As the figure shown below, this transcriptional region of the viral genome includes four poly-A addition sites (PAS). <br/>RNA polymerase scans through the viral genome and recognizes one of the PAS at each round of transcription. Once the polymerase identified a PAS, it signals enzymes to add the poly-A tail at the three prime end of the transcript as well as to terminate transcription (i.e., polymerase releasing). As a result, viral RNAs produced from several rounds of transcription are alternatively processed into either of these four  RNA transcripts (i.e., the longest viral RNA or alternative RNAs A, B, or C). <br/>Therefore, viral RNAs are alternatively processed at their three prime ends.
			 <br/><br/><br/>
               
             <img className='popup-image' src={Image28} /> <br/><br/>


			</div>


		</div> 
	);
}