import React from 'react';

//pop-up-images import
import Image14 from '../../assets/PopupWin/DNARNAdirectionality.png';

import './Popup2.css';

export default function (props) {
	return (
		<div className='popup-class-1'>

			<div className='popup-font-big'>
				<b>RNA/DNA directionality</b> <br/><br/>
			</div>

			<div className='popup-font-small'>
			    
                We name the directionality of DNA/RNA according to the third prime and the fifth prime carbon of the pentose sugar backbone either in RNA or DNA. Since DNA and RNA have the same chemical structure at the third and fifth prime carbon of the ribose ring, the DNA molecule is used to explain this directionality. The inset at the bottom of this illustration illustrates the locations of 5’ and 3’ carbons in the deoxyribose. In order to form a DNA strand, a phosphodiester bond links the sugar backbones of the adjacent nucleotides, and this covalent bond connects the 5’ phosphate group of one nucleotide to the 3’ -OH group of another nucleotide. At both ends of the DNA strands, the 5′-end contains a free phosphate group attached to the 5′ carbon of the ribose ring whereas the 3′-end has a free -OH group attached to the 3’ carbon. <br/><br/>
			    <img className='popup-image' src={Image14} /> <br/>

			    
                

			</div>


		</div> 
	);
}