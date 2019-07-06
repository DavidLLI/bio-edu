import React from 'react';

//pop-up-images import
import Image15 from '../../assets/PopupWin/5cap3tail-01-min.jpg';

import './Popup2.css';

export default function (props) {
	return (
		<div className='popup-class-1'>

			<div className='popup-font-big'>
				<b>3' end of viral RNA</b> <br/><br/>
			</div>

			<div className='popup-font-small'>
			    
               This illustration introduces how cellular enzymes process viral pre-mRNA.<br/><br/>
               <img className='popup-image' src={Image15} /> <br/><br/>
               In other cases, viral enzymes can also process these pre-mRNAs. During transcriptional elongation, a certain length of precursor RNA is being made, and its three prime end contains two essential signal sequences for polyadenylation. The signal sequences include an AAUAAA poly-A addition site sequence and a GU-rich sequence located at downstream. These signals will recruit specific enzymes to cleave between these two sequences, and create a novel OH 3’ end 10-35 nucleotides downstream from the AAUAAA sequence. This cleavage is also required for transcriptional termination. Cleaved GU-rich sequence is then degraded. This newly made free OH end provides a poly-A addition site for the poly-A polymerase.

			   

			    
                

			</div>


		</div> 
	);
}