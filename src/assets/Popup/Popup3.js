import React from 'react';

//pop-up-images import
import Image10 from '../../assets/PopupWin/Scalepop-upwindow-01-min.jpg';
import Image11 from '../../assets/PopupWin/Scalepop-upwindow-04-min.jpg';
import Image12 from '../../assets/PopupWin/Scalepop-upwindow-03-min.jpg';
import Image13 from '../../assets/PopupWin/Scalepop-upwindow-02-min.jpg';

import './Popup2.css';

export default function (props) {
	return (
		<div className='popup-class-1'>

			<div className='popup-font-big'>
				<b>Visual scale</b> <br/><br/>
			</div>

			<div className='popup-font-small'>
			    The scale can be a ruler only (1) or with labels adjacent to the genome (2). In some cases, (3), a table depicting the regions of interest may be given to show the precise positions of RNA transcripts (Figure 6).<br/><br/>
			    <b>Figure 6:</b>
			    <img className='popup-image' src={Image10} /> <br/><br/><br/>

			    Sometimes the unit of the scale shows the nucleotide number (nt) to measure the single-stranded or partially single-stranded viral genome because there is no base pair in the single-stranded region (Figure 7).<br/><br/>
                <b>Figure 7:</b>
                <img className='popup-image' src={Image11} /> <br/><br/><br/>

                The unit of the scale can also be kilo-base pair (kb) (Figure 8).<br/><br/><br/>
                <b>Figure 8:</b>
                <img className='popup-image' src={Image12} /> <br/><br/>

                In a different scenario, these numbers are normalized to 100 map unit (Figure 9). For example, the adenovirus genome size equals to 100 map units, and each map unit is about 350 nucleotides. Therefore, the total length of the adenovirus genome is about 35000 nucleotides, or 35000 bp (350 bp * 100 map units).<br/><br/>
                <b>Figure 9:</b>
                <img className='popup-image' src={Image13} /> <br/><br/>
                

			</div>


		</div> 
	);
}