 import { CHANGE_FOCUS, CHANGE_PAGE, SLIDING_END, CHANGE_MODULE, CHANGE_SECTION, NAV_ACTIVE, CHANGE_TUTORIAL } from "../constants/action-types";

 //module1
import Image1 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/Title/titled.jpg';
import Image2 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-01.jpg';
import Image3 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-02.jpg';
import Image4 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-02-02.png';
import Image5 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/pop-up_windows/TM100-popup-1.jpg';
import Image6 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-003.jpg';
import Image7 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-003_02.png';
import Image8 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-03.jpg';
import Image9 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-04.png';
import Image10 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-05.jpg';
import Image11 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-06.png';
import Image12 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-07.jpg';
import Image13 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-08.png';
import Image14 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-09.jpg';
import Image15 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-10.jpg';
import Image16 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-11.jpg';
import Image17 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/pop-up_windows/TMPOP100.jpg';
import Image18 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/pop-up_windows/TMPOP101.jpg';
import Image19 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/pop-up_windows/TMPOP102.jpg';
import Image20 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-12.jpg';
import Image21 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-13.jpg';
import Image22 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/pop-up_windows/TMPOP103.jpg';
import Image23 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-14.jpg';
import Image24 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/pop-up_windows/file-01.jpg';
import Image25 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-15.jpg';
import Image26 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/pop-up_windows/TMPOP105.jpg';
import Image27 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-16.jpg';
import Image28 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-17.jpg';
import Image29 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-18.jpg';
import Image30 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-19.jpg';
import Image31 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-20.jpg';
import Image32 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-20-02.png';
import Image33 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-21.jpg';
import Image34 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-21-02.png';
import Image35 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/pop-up_windows/TMPOP106.jpg';
import Image36 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-22.jpg';
import Image37 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-22-02.jpg';
import Image38 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-23.jpg';
import Image39 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-24.jpg';
import Image40 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-25.jpg';
import Image41 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-26.jpg';
import Image42 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-27.jpg';
import Image43 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-28.jpg';
import Image52 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TM-29-01-01.jpg';


import Image44 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/Pop-up_Strand_definition/DNAintro-01.jpg';
import Image45 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/Pop-up_Strand_definition/DNAintro-02-01.jpg';
import Image46 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/Pop-up_Strand_definition/DNAintro-03-01.jpg';
import Image47 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/Pop-up_Strand_definition/DNAintro-04-01-01.jpg';
import Image48 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/Pop-up_Strand_definition/DNAintro-05-01-01-01.jpg';
import Image49 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/Pop-up_Strand_definition/DNAintro-06-01-01-01-01.jpg';
import Image50 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/Pop-up_Strand_definition/DNAintro-07-01-01-01-01-01-01.jpg';

import Image51 from '../../assets/Viraliterate_Module 1_Thumbnails_V01/TM_intro_and_terminal_repeats/Main_interface/TMMMM-01.jpg';

//Module 0
import Image53 from '../../assets/Module 0_V01/Module01-01.jpg';
import Image54 from '../../assets/Module 0_V01/Module02-01-01.jpg';

import Image55 from '../../assets/Module 0_V01/Module03-01.jpg';
import Image56 from '../../assets/Module 0_V01/Module04-01.jpg';
import Image57 from '../../assets/Module 0_V01/Module05-01.jpg';
import Image58 from '../../assets/Module 0_V01/Module06-01.jpg';
import Image59 from '../../assets/Module 0_V01/Module07-01.jpg';
import Image60 from '../../assets/Module 0_V01/Module08-01.jpg';
import Image61 from '../../assets/Module 0_V01/Module09-01.jpg';

//module 2
import Image62 from '../../assets/Module2_V01/Apply_module2_ViraLiterate/Apply_module2_ViraLiterate_revised_V002.001.jpeg';
import Image63 from '../../assets/Module2_V01/Apply_module2_ViraLiterate/Apply_module2_ViraLiterate_revised_V002.002.jpeg';
import Image64 from '../../assets/Module2_V01/images/Module2-01-01.jpg';
import Image65 from '../../assets/Module2_V01/images/Module2-02-01.jpg';
import Image66 from '../../assets/Module2_V01/images/Module2-03-01.jpg';
import Image67 from '../../assets/Module2_V01/images/Module2-04-01.jpg';
import Image68 from '../../assets/Module2_V01/images/Module2-05-01.jpg';
import Image69 from '../../assets/Module2_V01/images/Module2-06-01.jpg';
import Image70 from '../../assets/Module2_V01/images/Module2-07-01.jpg';
import Image71 from '../../assets/Module2_V01/images/Module2-08-01.jpg';
import Image72 from '../../assets/Module2_V01/images/Ai file-01.jpg';
import Image73 from '../../assets/Module2_V01/images/Module2-10-01.jpg';
import Image74 from '../../assets/Module2_V01/images/Module2-09-01.jpg';
import Image75 from '../../assets/Module2_V01/images/Module2-11.jpg';
import Image76 from '../../assets/Module2_V01/images/Module2-12.jpg';

import Image77 from '../../assets/Module2_V01/images/Module2-13-01.jpg';
import Image78 from '../../assets/Module2_V01/images/Module2-14-01.jpg';
import Image79 from '../../assets/Module2_V01/images/Module2-15-01.jpg';
import Image80 from '../../assets/Module2_V01/images/Module2-16-01.jpg';
import Image81 from '../../assets/Module2_V01/images/Module2-17-01.jpg';
import Image82 from '../../assets/Module2_V01/images/Module2-18-01.jpg';
import Image83 from '../../assets/Module2_V01/images/Module2-19-01.jpg';

import Image84 from '../../assets/Module2_V01/images/Module2-20-01.jpg';
import Image85 from '../../assets/Module2_V01/images/Module2-22-01.jpg';
import Image86 from '../../assets/Module2_V01/images/Module2-23-01.jpg';
import Image87 from '../../assets/Module2_V01/images/Module2-24-01.jpg';
import Image88 from '../../assets/Module2_V01/images/Apply_module2_V002.030.jpeg';
import Image89 from '../../assets/Module2_V01/images/Module2-25-01.jpg';
import Image90 from '../../assets/Module2_V01/images/Module2-37-01.jpg';
import Image91 from '../../assets/Module2_V01/images/Module2-36-01.jpg';
import Image92 from '../../assets/Module2_V01/images/Module2-26-01.jpg';
import Image93 from '../../assets/Module2_V01/images/Module2-27-01.jpg';
import Image94 from '../../assets/Module2_V01/Apply_module2_ViraLiterate/Apply_module2_ViraLiterate_revised_V002.036.jpeg';
import Image95 from '../../assets/Module2_V01/Apply_module2_ViraLiterate/Apply_module2_ViraLiterate_revised_V002.037.jpeg';

import Image96 from '../../assets/Module2_V01/images/Module2-28-01.jpg';
import Image97 from '../../assets/Module2_V01/images/Module2-35-01.jpg';
import Image98 from '../../assets/Module2_V01/images/Module2-34-01.jpg';

import Image99 from '../../assets/Module2_V01/images/Module2-32-01.jpg';
import Image100 from '../../assets/Module2_V01/images/Module2-33-01.jpg';
import Image101 from '../../assets/Module2_V01/images/Module2-30-01.jpg';
import Image102 from '../../assets/Module2_V01/images/Module2-29-01.jpg';
import Image103 from '../../assets/Module2_V01/images/Module2-31-01.jpg';

//MODULE 1 2D animations
import animationData1 from '../../assets/Animation/data-01.json';
import animationData2 from '../../assets/Animation/data-02.json';
import animationData3 from '../../assets/Animation/data-03.json';
import animationData4 from '../../assets/Animation/data-04.json';
import animationData5 from '../../assets/Animation/data-05.json';
import animationData6 from '../../assets/Animation/data-06.json';
import animationData7 from '../../assets/Animation/data-07.json';
import animationData8 from '../../assets/Animation/data-08.json';
import animationData9 from '../../assets/Animation/data-09.json';
import animationData10 from '../../assets/Animation/data-10.json';
import animationData11 from '../../assets/Animation/data-11.json';
import animationData12 from '../../assets/Animation/data-12.json';
import animationData13 from '../../assets/Animation/data-13.json';
import animationData14 from '../../assets/Animation/data-14.json';
import animationData15 from '../../assets/Animation/data-15.json';
import animationData16 from '../../assets/Animation/data-16.json';
import animationData17 from '../../assets/Animation/data-17.json';
import animationData18 from '../../assets/Animation/data-18.json';
import animationData19 from '../../assets/Animation/data-19.json';
import animationData20 from '../../assets/Animation/data-20.json';
import animationData21 from '../../assets/Animation/data-21.json';
import animationData22 from '../../assets/Animation/data-22.json';
import animationData23 from '../../assets/Animation/data-23.json';
import animationData24 from '../../assets/Animation/data-24.json';

//Popupwindow-numbers
import PopupHTML1 from '../../assets/Popup/Popup1.js';

//Video
import TestVideo1 from '../../assets/video/finalllllllllllllllllllllllrender.mp4';
import TestVideo2 from '../../assets/video/720x480_2min.mp4';
import TestVideo3 from '../../assets/video/finalrender.mp4';
import TestVideo4 from '../../assets/video/finalrendershrink.mp4';
import TestVideo5 from '../../assets/video/finalrendershrink.webm';

//Image Sequence
import { imageSequence as ImageSequence1 } from '../../assets/imageSequences/test_mp4';

const initialState = {
  pageData:[
    // Module 1
    [
      // Section 1
      //<span style="color: #E78877;"></span>
      {
        name: 'Viral Genome of TM',
        pages: [
          {
            title: 'Basic features of viral transcription map',
            text: 'The figure on your right-hand side is a typical example of <b><em>viral transcription map (TM)</em></b> that summarizes all the transcriptional information of a DNA virus called the adenovirus, and this figure is adapted and modified from <em> the Fundamentals of Molecular Virology, 2nd Edition (Acheson, 2011)</em>. <br><br>Viral transcription maps usually contain many different graphical features, and they are difficult to understand at first. Viraliterate will not teach you the visual language by going through this graph. Instead, let’s start with a simple hypothetical example of TM, and all the essential features of viral TMs will be introduced step-by-step by using this hypothetical TM. <br><br>Please click the play button of the media controls to play this animation.',
            animation: animationData1,
            animationNoAutoplay: true
          },

          {
            title: 'Viral genome',
            text: 'When you first look at the TM, you should read from the fundamental element that every TM has: <b>the viral genome</b>. <br><br>In this case, the two white lines represent the viral genome. After you watch this animation, there will be a slider appears on the left.  By moving this slider, you should notice that the two white lines in TM are the schematical representation of the double-stranded helical viral DNA, and this line representation reduces the visual complexity of the realistic DNA double helix as well as it saves the design space. <br><br>Please click the plus icon within the blue dialogue box to open up a pop-up window discussing the different types of the viral genome.',
            animation: animationData2,

            popup: {
              position: {
                left: 360,
                top: 200
              },
              title: 'popup1',
              html: PopupHTML1
            }

          },

        ],
      },
      
      // Section 2
    
      {
        name: 'Terminal Repeats',
        pages: [

          {
            title: 'Terminal repeats- Part01',
            text: 'You may notice that both two ends of the viral genome can have these white boxes highlighted in <b><span style="color: #2B93D8;">blue</span></b>. These usually represent the <b>terminal repeats (TR)</b>.',
            animation: animationData3
          },
          {
            title: 'Terminal repeats- Part02',
            text: 'Check the realistic visual representation of TR by moving the slider, or click the plus icon to open up a pop-up window for additional information about the TR.',
            animation: animationData4,

            popup: {
              position: {
                left: 380,
                top: 200
              },
              title: 'popup1',
              html: PopupHTML1
            }

          },

        ],
      },
      // Section 3
      {
        name: 'Visual Scale',
        pages: [
         
          {
            title: 'Visual scale- Part01',
            text: 'A numerical <b>visual scale</b> is always presented beside to the viral genome, indicating the total length of the genome. The scale provides the accurate coordinates of all RNA transcripts relative to their corresponding viral genome parts. This visual scale is similar to a ruler that is usually marked off in specific units.',
            animation: animationData5
          },
         
            {
            title: 'Visual scale- Part02',
            text: 'Click the plus icon to open up a pop-up window to explore more.',
            animation: animationData6,

            popup: {
              position: {
                left: 335,
                top: 330
              },
              title: 'popup1',
              html: PopupHTML1
            }
          },

        ],
      },
      // Section 4
      {
        name: 'RNA Transcript',
        pages: [
           {
            title: 'Viral RNA transcript- Part01',
            text: 'Adjacent to the double-stranded DNA genome, you will find an orange arrow represents the <b><span style="color: #E78877;">viral RNA</span></b> transcribed from the viral genome. <br><br>Keep in your mind from now that the RNA has a specific directionality: 5’ and 3’ ends. This directionality is essential for understanding of this visual element - viral RNA. <br><br>Click the plus icon to open up a pop-up window to explore more.',
            animation: animationData7,

            popup: {
              position: {
                left: 405,
                top: 140
              },
              title: 'popup1',
              html: PopupHTML1
            }
          },
          
          {
            title: 'Viral RNA transcript- Part02',
            text: 'The <b><span style="color: #E78877;">viral RNA</span> comprises a vertical bar, a body and an arrowhead.',
            animation: animationData8
          },
          
          {
            title: 'Viral RNA transcript- Part03',
            text: 'Remember the directionality of RNA and let’s first start with the <b>arrowhead</b>. <br><br>The arrowhead usually has the dual graphical functions: <br><br>1. The direction of transcription: from 5 prime to 3 prime direction. <br><br>2. 3 prime end of mRNA transcript, corresponding to the polyadenylation site, which is a type of transcriptional modification created by the host cell mechanism. <br><br>Click the blue box to open up a pop-up window.',
            animation: animationData9,

            popup: {
              position: {
                left: 546,
                top: 70
              },
              title: 'popup1',
              html: PopupHTML1
            }
          },

           {
            title: 'Viral RNA transcript- Part04',
            text: 'Since RNA transcript synthesizes from 5’ to 3’,  we can deduce that the <b>vertical bar</b> on the left part of the RNA represents the 5’ end of mRNA, corresponding to the transcriptional promoter/initiation site of transcription as well as another type of transcriptional modification: 5’ capping. <br><br>Click the blue box to open up a pop-up window.',
            animation: animationData10,

            popup: {
              position: {
                left: 162,
                top: 70
              },
              title: 'popup1',
              html: PopupHTML1
            }
          },

          {
            title: 'Viral RNA transcript- Part05',
            text: 'The body of RNA transcript is shown as a straight line.',
            animation: animationData11
          },

          {
            title: 'Viral RNA transcript- Part06',
            text: 'However, in a typical TM, you will only see the processed RNA transcripts in broken lines. So what do these gaps/interruptions mean?',
            animation: animationData12
          },

          {
            title: 'Viral RNA transcript- Part07',
            text: 'Let’s check the broken orange lines first; they are <b><span style="color: #E78877;">exons</span></b> of the viral mRNA.',
            animation: animationData13
          },

          {
            title: 'Viral RNA transcript- Part08',
            text: 'The gaps are highlighted in light blue, and they are the removed <b><span style="color: #2B93D8;">introns</span></b>. Click plus icon to open up pop-up window. Typically, in TMs, the process of transcription, transcriptional modifications, and intron removal are not explained. Thus, the general steps of the whole RNA transcriptional processes will be illustrated on the next page and the detailed biological mechanism of intron removal will be discussed later in module 2.',
            animation: animationData14,

            popup: {
              position: {
                left: 315,
                top: 109
              },
              title: 'popup1',
              html: PopupHTML1
            }
          },

           {
            imageSequence: ImageSequence1,
            title: 'Viral RNA transcript- Part09',
            text: '(scroll-based animation)'
          },
          
          //Scroll video for part09

           {
            title: 'Viral RNA transcript- Part10',
            text: 'The significant advantage of illustrating the RNA in broken lines is to help audiences to locate the exact positions of exons and removed introns to the viral genome. <br><br> In this animation, you can follow the dotted guidelines to determine the length and position of every exon as well as every removed intron.',
            animation: animationData16
          },
           
           {
            title: 'Viral RNA transcript- Part11',
            text: 'Now, let’s refresh your memory and improve your understanding: <br><br>please check all the transcription initiation sites in this animation by clicking the little boxes.',
            animation: animationData17
          },

            {
            title: 'Viral RNA transcript- Part12',
            text: 'A common misconception would be defining the transcription initiation site of RNA transcripts in TM. If you see any five prime ends of the RNA without a vertical bar or any visual cue, do not be confused, this is not the actual transcription initiation site; instead, these five prime ends without vertical bars located in between the discontinuous RNA transcript correspond to the splice acceptor sites. <br>(note: this will be discussed in module 2)',
            animation: animationData18
          },
        ],
      },

 // Section 5
      {
        name: 'RNA & DNA Directionalities',
        pages: [

         {
            title: 'RNA directionalities- Part01',
            text: 'We already know the directionality of an RNA transcript, but what about the directionality of the double-stranded viral genome?',
            animation: animationData19
          },

          {
            title: 'RNA directionalities- Part02',
            text: 'You can determine the directions of the DNA double strands by following these two steps processes: <br><br>Steps 1: Look at your RNA and find its 3’ end (arrow head) and 5’ end (vertical bar). <br><br>Step 2 : Find the DNA single strand that adjacent to this RNA strand and this DNA strand reads in the opposite direction. Its complementary DNA strand has the same direction as the RNA strand. <br><br>Click here to open up a pop-up window to explore the details.',
            animation: animationData20,

            popup: {
              position: {
                left: 25,
                top: 214
              },
              title: 'popup1',
              html: PopupHTML1
            }
          },

          {
            title: 'RNA directionalities- Part03',
            text: 'The directionality and the name of the two DNA strands are relative to the directionality of the RNA transcript since the transcription can occur at both DNA strands but in the opposite direction.',
            animation: animationData22
          },

          {
            title: 'RNA directionalities- Part04',
            text: 'As the animation shown, the top DNA strand is the template strand for the viral RNA 1.',
            animation: animationData23
          },

          {
            title: 'RNA directionalities- Part05',
            text: 'In the second scenario, the top DNA strand is no longer the template strand as the transcriptional direction of the viral RNA 2 is going on the opposite way. Therefore, the bottom DNA strand is the template strand.',
            animation: animationData24
          },

        ],
      },



    ],

    

    // Module 2
    [
      // Section 1
      {
        name: 'section 1 title',
        pages: [
          {
            title: 'sub1',
            text: 'text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1textxt1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1te1texxt1text1text1text1tet1text1xt1text1text1text1text1text1text1text1text1text1text1text1te',
            animation: animationData1
          },
          {
            title: 'sub2',
            text: 'text2',
            animation: animationData2
          },
          {
            title: 'sub3',
            text: 'text3',
            animation: animationData3
          },
          {
            title: 'sub4',
            text: 'text4',
            animation: animationData4
          },
          {
            title: 'sub1',
            text: 'text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1textxt1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1te1texxt1text1text1text1tet1text1xt1text1text1text1text1text1text1text1text1text1text1text1te',
            animation: animationData1
          },
          {
            title: 'sub2',
            text: 'text2',
            animation: animationData2
          },
          {
            title: 'sub3',
            text: 'text3',
            animation: animationData3
          },
          {
            title: 'sub1',
            text: 'text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1textxt1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1te1texxt1text1text1text1tet1text1xt1text1text1text1text1text1text1text1text1text1text1text1te',
            animation: animationData1
          },
          {
            title: 'sub2',
            text: 'text2',
            animation: animationData2
          },
          {
            title: 'sub3',
            text: 'text3',
            animation: animationData3
          }
        ],
      },
      // Section 2
      {
        name: 'section 2 title',
        pages: [
          {
            title: 'sub1',
            text: 'text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1textxt1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1te1texxt1text1text1text1tet1text1xt1text1text1text1text1text1text1text1text1text1text1text1te',
            animation: animationData1
          },
          {
            title: 'sub2',
            text: 'text2',
            animation: animationData2
          },
          {
            title: 'sub3',
            text: 'text3',
            animation: animationData3
          },
          {
            title: 'sub4',
            text: 'text4',
            animation: animationData4
          },
          {
            title: 'sub1',
            text: 'text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1textxt1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1te1texxt1text1text1text1tet1text1xt1text1text1text1text1text1text1text1text1text1text1text1te',
            animation: animationData1
          },
          {
            title: 'sub2',
            text: 'text2',
            animation: animationData2
          },
          {
            title: 'sub3',
            text: 'text3',
            animation: animationData3
          },
        ],
      },
      // Section 3
      {
        name: 'section 3 title',
        pages: [
          {
            title: 'sub1',
            text: 'text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1textxt1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1te1texxt1text1text1text1tet1text1xt1text1text1text1text1text1text1text1text1text1text1text1te',
            animation: animationData1
          },
          {
            title: 'sub2',
            text: 'text2',
            animation: animationData2
          }
        ],
      },
    ],
    // Module for Test
    [
      // Section for Test
      {
        name: 'section test',
        pages: [
          {
            quiz: {
              image: Image1,
              question: 'hi',
              choices: ['first', 'second', 'third', 'fourth'],
              answer: 0
            },
            title: 'test quiz',
            text: 'test quiz'
          },
          {
            quiz: {
              image: Image1,
              question: 'hi',
              choices: ['first', 'second', 'third', 'fourth'],
              answer: [0, 1]
            },
            title: 'test quiz',
            text: 'test quiz'
          },
          {
            imageSequence: ImageSequence1,
            title: 'test image sequence',
            text: 'test image sequence'
          },
          {
            video: TestVideo1,
            title: 'test video',
            text: 'video description'
          },
          {
            video: TestVideo2,
            title: 'test video',
            text: 'video description'
          },
          {
            video: 'https://www.html5rocks.com/tutorials/video/basics/Chrome_ImF.webm',
            title: 'test video',
            text: 'video description'
          },
          {
            video: TestVideo3,
            title: 'test video',
            text: 'video description'
          },
          {
            video: TestVideo4,
            title: 'test video',
            text: 'video description'
          },
          {
            video: TestVideo5,
            title: 'test video',
            text: 'video description'
          },
          {
            before: {
              animation: animationData1
            },
            after: Image1,
            title: 'test1',
            text: 'text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1textxt1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1text1te1texxt1text1text1text1tet1text1xt1text1text1text1text1text1text1text1text1text1text1text1te'
          },
          {
            title: 'test2',
            text: 'text2',
            animation: animationData2,
            popup: {
              position: {
                left: 360,
                top: 200
              },
              title: 'popup1',
              html: PopupHTML1
            }
          }
        ],
      },
    ],
  ],
  focus: 0,
  currentModule: 0,
  currentSection: 0,
  currentPage: 0,
  sliding: false,
  navActive: false,
  tutorialActive: false
};

function rootReducer(state = initialState, action) {
  if (action.type === CHANGE_FOCUS) {
    if (action.focus >= 0 && action.focus < state.pageData.length) {
      state = Object.assign({}, state, {
          focus: action.focus
      });
    }
  }
  else if (action.type === CHANGE_PAGE) {
    if (action.currentPage >= 0 && 
        action.currentPage < state.pageData[state.currentModule][state.currentSection].pages.length) {
      state = Object.assign({}, state, {
          currentPage: action.currentPage
      });
    }
  }
  else if (action.type === CHANGE_MODULE) {
    if (action.currentModule >= 0 && 
        action.currentModule < state.pageData.length) {
      state = Object.assign({}, state, {
          currentModule: action.currentModule
      });
    }
  }
  else if (action.type === CHANGE_SECTION) {
    if (action.currentSection >= 0 && 
        action.currentSection < state.pageData[state.currentModule].length) {
      state = Object.assign({}, state, {
          currentSection: action.currentSection
      });
    }
  }
  else if (action.type === NAV_ACTIVE) {
    state = Object.assign({}, state, {
      navActive: action.navActive
    });
  }
  else if (action.type === CHANGE_TUTORIAL) {
    state = Object.assign({}, state, {
      tutorialActive: action.tutorialActive
    });
  }
  else if (action.type === SLIDING_END) {
    clearInterval(action.intervalID);
    state = Object.assign({}, state, {
        sliding: false
    });
  }

  return state;
}

export default rootReducer;