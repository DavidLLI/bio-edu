import React from 'react';

//pop-up-images import
import Image16 from '../../assets/PopupWin/5cap3tail-02-min.jpg';

import './Popup2.css';

export default function (props) {
	return (
		<div className='popup-class-1'>

			<div className='popup-font-big'>
				<b>5' end of viral RNA</b> <br/><br/>
			</div>

			<div className='popup-font-small'>
			   
               The great majority of viral and cellular mature mRNAs possess the same 5’ cap: m7G-ppp- N (any nucleotide). m7G stands for a methyl group attaches to the 7th nitrogen of guanosine. ppp is the 5’,5’-triphosphate bridge. This bridge connects the m7G with any nucleotide (N) of the 5’ end of mRNA primary transcript.<br/><br/>
               <img className='popup-image' src={Image16} /> <br/><br/><br/>
               Different viruses synthesize 5' cap structure in different ways:<br/>
               1. 5' cap can be made by cellular enzymes.<br/>
               2. 5' cap can be made by viral enzymes.<br/>
               3. Virus can acquire 5' cap from cellular RNAs: cap-snatching.<br/><br/><br/>

			   

			    
                

			</div>


		</div> 
	);
}