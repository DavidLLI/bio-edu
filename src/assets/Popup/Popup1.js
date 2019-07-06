import React from 'react';

//pop-up-images import
import Image4 from '../../assets/PopupWin/Genomevariations.jpg';

import './Popup1.css';

export default function (props) {
	return (
		<div className='popup-class-1'>





			<div className='popup-font-big'>
				<b>Viral genome</b> <br/><br/>
			</div>

          


			<div className='popup-font-small'>
				Other viruses may have a linear single stranded genome, cyclized, or partially double-strand DNA or RNA genome (Figure 1). In TMs, they can be presented by using schematic lines in slightly different ways.
                You can visit the links provided below to see their visual representations accordingly.<br/><br/>
                <img className='popup-image' src={Image4} /> <br/><br/>
                 <br/><b>ViralZone:</b><br/>
                 1.	<a href="https://viralzone.expasy.org/103?outline=all_by_species"><font color="#7AC943"><b>Parvoviridae</b></font></a> (single stranded viral genome).  
                    <br/> 

                 2.	<a href="https://viralzone.expasy.org/148"><font color="#7AC943"><b>Polyomaviridae</b></font></a> (cyclized double stranded viral genome).
                    <br/> 

                 3.	<a href="https://viralzone.expasy.org/9"><font color="#7AC943"><b>Hepadnaviridae</b></font></a> (partially double stranded viral genome): 
                  

			</div>

			












		</div> 
	);
}