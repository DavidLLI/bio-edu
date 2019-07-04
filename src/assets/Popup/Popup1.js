import React from 'react';

//pop-up-images import
import Image4 from '../../assets/PopupWin/Genomevariations.png';

import './Popup1.css';

export default function (props) {
	return (
		<div className='popup-class-1'>





			<div className='popup-font-big'>
				Viral genome <br/><br/>
			</div>

           <img className='popup-image' src={Image4} /> <br/><br/>


			<div className='popup-font-small'>
				<big>O</big>ther viruses may have a linear single stranded genome, cyclized, or partially double-strand DNA or RNA genome. In TMs, they can be presented by using schematic lines in slightly different ways.
                You can visit the links provided below to see their visual representations accordingly.<br/>
                 <br/>ViralZone:<br/>
                 1.	<a href="https://viralzone.expasy.org/103?outline=all_by_species">Parvoviridae</a> (single stranded viral genome).  
                    <br/> 

                 2.	<a href="https://viralzone.expasy.org/148">Polyomaviridae</a> (cyclized double stranded viral genome).
                    <br/> 

                 3.	<a href="https://viralzone.expasy.org/9">Hepadnaviridae</a> (partially double stranded viral genome): 
                  

			</div>

			












		</div> 
	);
}