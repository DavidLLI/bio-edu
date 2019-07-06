import React from 'react';

//pop-up-images import
import Image18 from '../../assets/PopupWin/DNAreading-04-min.jpg';
import Image19 from '../../assets/PopupWin/DNAreading-03-min.jpg';
import Image20 from '../../assets/PopupWin/DNAreading-02-min.jpg';

import './Popup2.css';

export default function (props) {
	return (
		<div className='popup-class-1'>

			<div className='popup-font-big'>
				<b>Reading the direction of transcription</b> <br/><br/>
			</div>

			<div className='popup-font-small'>
			   
               
               The two viral DNA strands have different names during the transcription. In this case, the bottom strand refers to the template strand, which serves as a template during transcription. The top strand is called the coding strand; which sequence is the same as the newly formed RNA sequence (Note: all the Ts in RNA are replaced by Us). <br/><br/>
               <img className='popup-image' src={Image18} /> <br/><br/><br/>
               The template strand is the only strand used in transcription since RNA polymerase can’t use both strands at each round of gene expression.<br/><br/>
               <img className='popup-image' src={Image19} /> <br/><br/><br/>
               RNA polymerase will scan through the template DNA strand from 3’ to 5’, and RNA synthesis is from 5’ to 3’. Since newly synthesized RNA is complementary to the template strand, scientists can hybridize the newly synthesized RNAs with their template DNA strands to deduce their genome positions of these RNAs – this experiment is known as DNA-RNA hybridization, which significantly helped scientists to create these viral transcription maps.<br/><br/>
               <img className='popup-image' src={Image20} /> <br/><br/><br/>
		

			</div>


		</div> 
	);
}