import React from 'react';

//pop-up-images import
import Image6 from '../../assets/PopupWin/TRpop-upwindow V02-04-min.jpg';
import Image7 from '../../assets/PopupWin/TRpop-upwindow V02-01-min.jpg';
import Image8 from '../../assets/PopupWin/TRpop-upwindow V02-03-min.jpg';
import Image9 from '../../assets/PopupWin/TRpop-upwindow V02-02-min.jpg';

import './Popup2.css';

export default function (props) {
	return (
		<div className='popup-class-1'>

			<div className='popup-font-big'>
				<b>Terminal repeats (TR)</b> <br/><br/>
			</div>

			<div className='popup-font-small'>
			    Usually, in a viral genome, we can either have the inverted terminal repeats (ITRs) or the long (direct/flanking) terminal repeats (LTRs). <br/><br/>
			    1. The first illustration (Figure 2) shown below illustrates the ITRs in viral genome. The ITR sequences of the same strand are complementary to each other, and the ITR at one end of the DNA strand binds to its reverse complementary repeat at the same end of the complementary DNA strand.<br/><br/>
			    <b>Figure 2:</b>
			    <img className='popup-image' src={Image6} /> <br/><br/><br/>

			    To test if this is a ITRs, please first separate this double-stranded viral genome apart (Figure 3). After the separation, try to fold each separated DNA strand as the illustration shows and to observe the result. As you can see, the inverted terminal repeats are capable of self-complementary base pairing. The biological function/significance of this self base-pairing of the single-stranded viral DNA is to reform a replication origin as we observed in double-stranded DNA viral genome. Thus, this DNA virus can either use the single-stranded viral DNA or the double-stranded viral genome to improve the viral genome replication efficiency.<br/><br/>
                <b>Figure 3:</b>
                <img className='popup-image' src={Image7} /> <br/><br/><br/>

                2. However, long direct terminal repeats (LTRs) have different repeat sequences (Figure 4).<br/><br/>
                <b>Figure 4:</b>
                <img className='popup-image' src={Image8} /> <br/><br/><br/>
                I want you to separate this double-stranded viral genome as well (Figure 5). After separation, you should realize that they cannot form self base-pairing when you try to fold each strand like this. This method is one way to distinguish LTR from ITR. Both of these two types of repeats have different biological functions.<br/><br/>
                <b>Figure 5:</b>
                <img className='popup-image' src={Image9} /> <br/><br/>
                Click the <a href="https://www.sciencedirect.com/topics/neuroscience/inverted-terminal-repeat"><font color="#7AC943"><b>ITR</b></font></a> and <a href="https://www.sciencedirect.com/topics/neuroscience/long-terminal-repeat"><font color="#7AC943"><b>LTR</b></font></a> to explore more about these two repeats.<br/>


			</div>


		</div> 
	);
}