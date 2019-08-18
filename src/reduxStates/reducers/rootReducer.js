 import { CHANGE_FOCUS, CHANGE_PAGE, SLIDING_END, CHANGE_MODULE, CHANGE_SECTION, NAV_ACTIVE, CHANGE_TUTORIAL } from "../constants/action-types";

 //module1
import Image1 from '../../assets/PopupWin/genome-slider.png';
import Image2 from '../../assets/PopupWin/TR-slider.png';
import Image3 from '../../assets/PopupWin/DNARNAdirectionality.png';
import Image4 from '../../assets/PopupWin/Genomevariations.jpg';
import Image5 from '../../assets/PopupWin/RNAslider-04-min-min.jpg';
import Image6 from '../../assets/PopupWin/TRpop-upwindow V02-04-min.jpg';
import Image7 from '../../assets/PopupWin/TRpop-upwindow V02-01-min.jpg';
import Image8 from '../../assets/PopupWin/TRpop-upwindow V02-03-min.jpg';
import Image9 from '../../assets/PopupWin/TRpop-upwindow V02-02-min.jpg';
import Image10 from '../../assets/PopupWin/Scalepop-upwindow-01-min.jpg';
import Image11 from '../../assets/PopupWin/Scalepop-upwindow-04-min.jpg';
import Image12 from '../../assets/PopupWin/Scalepop-upwindow-03-min.jpg';
import Image13 from '../../assets/PopupWin/Scalepop-upwindow-02-min.jpg';
import Image14 from '../../assets/PopupWin/DNARNAdirectionality.png';
import Image15 from '../../assets/PopupWin/5cap3tail-01-min.jpg';
import Image16 from '../../assets/PopupWin/5cap3tail-02-min.jpg';
import Image17 from '../../assets/PopupWin/introntypes-01-min.jpg';
import Image18 from '../../assets/PopupWin/DNAreading-04-min.jpg';
import Image19 from '../../assets/PopupWin/DNAreading-03-min.jpg';
import Image20 from '../../assets/PopupWin/DNAreading-02-min.jpg';

import Image28 from '../../assets/PopupWin/alternative poly-A-01-min.jpg';
import Image29 from '../../assets/PopupWin/splicing types-03-min.jpg';
import Image30 from '../../assets/PopupWin/alternative splicing-02-min.jpg';


//module1 quiz section
import Image21 from '../../assets/Quiz/quiz01.jpg';
import Image22 from '../../assets/Quiz/quiz02.jpg';
import Image23 from '../../assets/Quiz/quiz03.jpg';
import Image24 from '../../assets/Quiz/quiz04.jpg';
import Image25 from '../../assets/Quiz/quiz05.jpg';
import Image26 from '../../assets/Quiz/quiz06.jpg';
import Image27 from '../../assets/Quiz/quiz07.jpg';

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
import animationData25 from '../../assets/Animation/data-25.json';
import animationData26 from '../../assets/Animation/data-26.json';
import animationData27 from '../../assets/Animation/data-27.json';
import animationData28 from '../../assets/Animation/data-28.json';
import animationData29 from '../../assets/Animation/data-29.json';
import animationData30 from '../../assets/Animation/data-30.json';
import animationData31 from '../../assets/Animation/data-31.json';
import animationData32 from '../../assets/Animation/data-32.json';
import animationData33 from '../../assets/Animation/data-33.json';
import animationData34 from '../../assets/Animation/data-34.json';
import animationData35 from '../../assets/Animation/data-35.json';
import animationData36 from '../../assets/Animation/data-36.json';
import animationData37 from '../../assets/Animation/data-37.json';
import animationData38 from '../../assets/Animation/data-38.json';
import animationData39 from '../../assets/Animation/data-39.json';
import animationData40 from '../../assets/Animation/data-40.json';
import animationData41 from '../../assets/Animation/data-41.json';


//Popupwindow-numbers
import PopupHTML1 from '../../assets/Popup/Popup1.js';
import PopupHTML2 from '../../assets/Popup/Popup2.js';
import PopupHTML3 from '../../assets/Popup/Popup3.js';
import PopupHTML4 from '../../assets/Popup/Popup4.js';
import PopupHTML5 from '../../assets/Popup/Popup5.js';
import PopupHTML6 from '../../assets/Popup/Popup6.js';
import PopupHTML7 from '../../assets/Popup/Popup7.js';
import PopupHTML8 from '../../assets/Popup/Popup8.js';
import PopupHTML9 from '../../assets/Popup/Popup9.js';
import PopupHTML10 from '../../assets/Popup/Popup10.js';
//Video
import TestVideo1 from '../../assets/video/finalllllllllllllllllllllllrender.mp4';
import TestVideo2 from '../../assets/video/720x480_2min.mp4';
import TestVideo3 from '../../assets/video/finalrender.mp4';
import TestVideo4 from '../../assets/video/finalrendershrink.mp4';
import TestVideo5 from '../../assets/video/finalrendershrink.webm';

//Image Sequence
import { imageSequence as ImageSequence1 } from '../../assets/imageSequences/test_mp4';
import { imageSequence as FinalRenderSeq } from '../../assets/imageSequences/finalrender';

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
            before: {
              animation: animationData2
            },
            after: Image1,

            popup: {
              position: {
                left: 360,
                top: 200
              },
              title: ' ',
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
            
            animation: animationData3,
            title: 'Terminal repeats- Part01',
            text: 'You may notice that both two ends of the viral genome may have these white boxes highlighted in <b><span style="color: #2B93D8;">blue</span></b>. These usually represent the <b>terminal repeats (TR)</b>.',
            
          },
          {
            title: 'Terminal repeats- Part02',
            text: 'Check the realistic visual representation of TR by moving the slider, or click the plus icon to open up a pop-up window for additional information about the TR.',
            
              before: {
              animation: animationData4
            },
            after: Image2,
          
            popup: {
              position: {
                left: 380,
                top: 200
              },
              title: ' ',
              html: PopupHTML2
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
              title: ' ',
              html: PopupHTML3
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
            text: 'Adjacent to the double-stranded DNA genome, you will find an arrow represents the <b><span style="color: #E78877;">viral RNA</span></b> transcribed from the viral genome. <br><br>Keep in your mind from now that the RNA has a specific directionality: 5’ and 3’ ends. This directionality is essential for understanding of this visual element - viral RNA. <br><br>Click the plus icon to open up a pop-up window to explore more.',
            
            before: {
              animation: animationData7
            },
            after: Image5,

            popup: {
              position: {
                left: 405,
                top: 140
              },
              title: ' ',
              html: PopupHTML4
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
              title: ' ',
              html: PopupHTML5
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
              title: ' ',
              html: PopupHTML6
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
              title: ' ',
              html: PopupHTML7
            }
          },

           {
            imageSequence: FinalRenderSeq,
            title: 'Viral RNA transcript- Part09',
            text: 'In this hypothetical scroll-based 3D animation shown on your right-hand side, the viral pre-processed mRNAs in infected cell nuclei are synthesized by host <b>RNA polymerase II</b>.<br> (Use the wheel button of your mouse or trackpad to scroll and play this animation) <br><br>Similar to the host transcriptional mechanism, the entire  transcriptional processes of viral RNA can be separated into four main stages: <br><br>1. <b>Formation of the transcription initiation complex</b><br>The first step is the binding of the transcriptional factor (TF) IID to the TATA-box of viral DNA. TFIID contains a TATA-box binding domain, which can bind itself to this core DNA promoter element and induce profoundly bending of viral DNA. Then, other transcriptional factors are recruited to the viral genome, including TFIIA, TFIIB, and TFIIH as well as the RNA polymerase II. Once the complex is formed, TFIIH unwinds DNA and induces the formation of the transcription bubble, which allows the incoming free RNA nucleotides to bind to the template strand (will be discussed later) of the viral DNA genome. After a short nascent RNA has been made, the C terminal domain of the RPB1 subunit of the RNA polymerase will be phosphorylated by TFIIH. Phosphorylated CTD domain will recruit enzymes to cap 5 prime end of this nascent RNA and to facilitate RNA elongation. <br><br> 2. <b>RNA elongation</b><br>After RNA 5 prime capping, RNA is continuously synthesizing into a certain length and cellular enzymes to will process its 3 prime end to add the poly-A tail.<br><br>3. <b>intron removal (RNA splicing)</b><br>The spliceosome complex will splice the introns out from the newly formed precursor viral RNA. The RNA loop shown in this animation is the intron lariat, which indicates the beginning of RNA splicing. <br><br>4. <b>Mature RNA formation</b> <br>Finally, the introns were removed, and the exons are joining back together to form a shorter mature viral mRNA with a 5 prime cap and a 3 prime poly-A tail. <br><br> At the end of this animation, you should see the viral RNAs in TMs are usually illustrated as the <b>intermediate step</b> of RNA processing as shown in the blue box.'
          },
          
          

           {
            title: 'Viral RNA transcript- Part10',
            text: 'The significant advantage of illustrating the RNA in broken lines (i.e., the intermediate step) is to help audiences to locate the exact positions of exons and removed introns to the viral genome. <br><br> In this animation, you can follow the dotted guidelines to determine the length and position of every exon as well as every removed intron.',
            animation: animationData16
          },
           
           {
            title: 'Viral RNA transcript- Part11',
            text: 'Now, let’s refresh your memory and improve your understanding: <br><br>Please check all the transcription initiation sites in this animation by clicking the little boxes.',
            animation: animationData17
          },

            {
            title: 'Viral RNA transcript- Part12',
            text: 'A common misconception would be defining the transcription initiation site of RNA transcripts in TM. If you see any five prime ends of the RNA without a vertical bar or any visual cue, do not be confused, this is not the actual transcription initiation site; instead, these five prime ends without vertical bars located in between the discontinuous RNA transcript correspond to a splice acceptor site. <br>(note: this will be discussed in module 2)',
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
              title: ' ',
              html: PopupHTML8
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
            text: 'In the second scenario, the top DNA strand is no longer the template strand as the transcriptional direction of the viral RNA 2 is going on the opposite way. Therefore, the bottom DNA strand is the template strand. <br/><br/> <b>Well done!</b><br/> Now you have finished the module 1 and possessed basic skills of TM interpretation. Now I want you to either take a break or click the buttons shown below to take the quiz to enhance your understanding of module 01 or to enter the next module. <br/><span style="color: #1B75BC;"><b><em>Quiz for module 01</em></b></span> <br/> <span style="color: #1B75BC;"><b><em>Module 02</em></b></span>',
            animation: animationData24
          },

        ],
      },
    ],












    // Module01 quiz section
    [
      // Section for Test
      {
        name: 'Module 1 quiz section',
        pages: [
          
          {
            quiz: {
              image: Image21,
              question: 'All quiz questions are on the left section. Please select the correct answer for this question.',
              choices: ['Visual scale, viral genome, and terminal repeats', 'Viral genome, visual scale, and terminal repeats', 'Viral genome, terminal repeats, and visual scale', 'Viral RNA, 5 prime cap, and visual scale'],
              answer: 2
            },
            title: 'Question 01',
            text: 'Welcome to the quiz section for module 01.<br/> This quiz section consists of seven multiple-choice questions designed to improve your understanding of the basic knowledge of viral transcription map. There is no time limitation, and you can start whenever you want.<br/><br/> What do the <span style="color: #1B75BC;"><b>blue</b></span>, <span style="color: #2BB673;"><b>green</b></span> and <span style="color: #5A5FAA;"><b>purple</b></span> boxes indicate respectively?'
          },
         

         {
            quiz: {
              image: Image22,
              question: 'Please select the correct answer for this question.',
              choices: ['1240 nts', '700 nts', '540 nts', '480 nts'],
              answer: 1
            },
            title: 'Question 02',
            text: 'How many base pairs (bp) in total do the exons of this RNA transcript have?'
          },  


          {
            quiz: {
              image: Image23,
              question: 'Select all applicable choices.',
              choices: ['[5’-AAUAAA- 3’]  poly-A signal itself is sufficient to specify poly(A) addition.', 'A stretch of RNA that contains only adenosine monophosphates.', 'All the adenine bases are linked by 5’-5’ triphosphate bridge. ', 'This RNA modification plays crucial role in stability of mature mRNA and translation.'],
              answer: [1, 3]
            },
            title: 'Question 03',
            text: 'Which of following option/s regarding the arrowhead is/are true?'
          },

            {
            quiz: {
              image: Image24,
              question: 'Select all applicable choices.',
              choices: ['The transcriptional promoter.', 'N8-methylguanosine cap', 'The N7-methylguanosine linked to the viral mRNA through a 5′-5′ triphosphate bridge.', 'A post translational modification plays crucial role in the translation and stability of mature mRNA.'],
              answer: [0, 2]
            },
            title: 'Question 04',
            text: 'What does this vertical bar indicate? '
          },

            {
            quiz: {
              image: Image25,
              question: 'Please select the correct answer for this question.',
              choices: ['The gap between these two RNA transcripts; 2 transcripts', 'Removed intron; 1 transcript', 'This region includes a 5’ cap; 1 transcript', 'This region includes a 3’ poly-A tail; 1 transcript'],
              answer: 1
            },
            title: 'Question 05',
            text: '(a) What is the visual meaning of the area highlighted in <span style="color: #1B75BC;"><b>blue</b></span>? (b) How many transcript/s do/es this TM show?'
          },

            {
            quiz: {
              image: Image26,
              question: 'Please select the correct answer for this question.',
              choices: ['A- 3 prime, B- 5 prime, C- 5 prime, D- 3 prime, E- 3 prime, F- 5 prime; bottom DNA strand', 'A- 5 prime, B- 3 prime, C- 3 prime, D- 5 prime, E- 5 prime, F- 3 prime; bottom DNA strand', 'A- 5 prime, B- 5 prime, C- 3 prime, D- 3 prime, E- 5 prime, F- 5 prime; top DNA strand', 'A- 5 prime, B- 3 prime, C- 5 prime, D- 3 prime, E- 5 prime, F- 3 prime; top DNA strand'],
              answer: 0
            },
            title: 'Question 06',
            text: 'An RNA transcript is given in this scenario, and please determine the directionalities of both this RNA transcript and the double-stranded DNA. <br/> Which DNA strand can be used to hybridize with this newly synthesized RNA?'
          },

            {
            quiz: {
              image: Image27,
              question: 'Please select the correct answer for this question.',
              choices: ['1', '1,2', '1,2,3,4', '4'],
              answer: 0
            },
            title: 'Question 07',
            text: 'Please find all the 5’ ends in this RNA transcript by selecting these numbers. <br/><br/>Nice! I assume you learned the basic knowledge of viral TM by going through both module 1 and this quiz section. Now I want you to either go back to review the module 1 or enter the next module by clicking these buttons shown below. <br/><span style="color: #1B75BC;"><b><em>Module 01</em></b></span> <br/> <span style="color: #1B75BC;"><b><em>Module 02</em></b></span>'
          },
          
          
          
          
        ],
      },
    ],

















    

    // Module 2
    [
      // Section 1
      {
        name: 'Alternative transcription initiation sites',
        pages: [
          {
            title: 'Variations at 5’ end of the transcript - Part01',
            text: 'Welcome back to ViraLiterate module 2! <br/> I hope you already familiarize with the basic features of TM. However, in real-world examples, TMs can be complicated because there are <b><em>variations</em></b> in the visual representation of the RNA transcripts. <br/><br/>Before introducing these variations, please review the first module and identify the meaning of this vertical bar shown in the blue box.',
            animation: animationData25
          },
          {
            title: 'Variations at 5’ end of the transcript - Part02',
            text: 'Good job! This represents the transcriptional initiation site as well as the 5’ cap (5 prime end of viral RNA).',
            animation: animationData26
          },
          {
            title: 'Variations at 5’ end of the transcript - Part03',
            text: 'However, in some viruses TM, you may have <b> multiple transcriptional starting sites (TSS) </b> - i.e., the multiple vertical bars. These alternative TSS all serve as potential starting sites for RNA polymerase to bind and to initiate transcription.',
            animation: animationData27
          },
          {
            title: 'Variations at 5’ end of the transcript - Part04',
            text: 'For each round of transcription, the polymerase can choose any one of these vertical bars as the transcription initiation site. For each round of transcription, the polymerase can choose any one of these vertical bars as the transcription initiation site. <br/><br/>Note: the composition of the viral RNA is not affected by different TSSs.',
            animation: animationData28
          },
          
        ],
      },
      // Section 2
      {
        name: 'Alternative poly-A addition sites',
        pages: [



          {
            title: 'Variations at 3’ end of the transcript - Part01',
            text: 'At three prime end of viral RNA, you also can have the variations as this animation shown: the RNAs transcribed from the common transcriptional starting site, but end up with different 3’ ends.',
            animation: animationData29
          },

          {
            title: 'Variations at 3’ end of the transcript - Part02',
            text: 'This variation at three prime ends is called <b><span style="color: #2B93D8;">alternative polyadenylation</span></b> - a phenomenon that the mature RNA molecules with different 3′ ends <b><span style="color: #2B93D8;">(A,B,C,D)</span></b> originate from distinct polyadenylation sites of a single gene. <br><br>Please click the plus icon within the blue dialogue box to open up a pop-up window discussing the details of this variation.',
            animation: animationData30,
            popup: {
              position: {
                left: 480,
                top: 310
              },
              title: ' ',
              html: PopupHTML10
            }

          },





          
        ],
      },
      // Section 3
      {
        name: 'Alternative splicing',
        pages: [


          {
            title: 'Variations of the transcript body part - Part01',
            text: 'Please review the first module and identify the meaning of this gap shown in the blue box.',
            animation: animationData31
          },
          {
            title: 'Variations of the transcript body part - Part02',
            text: 'This is a removed intron. Now, it is essential for you to understand that intron removal is facilitated by a biological mechanism called <b>RNA splicing</b>.',
            animation: animationData32
          },
          {
            title: 'Variations of the transcript body part - Part03',
            text: 'After transcription, five prime and three prime modifications, precursor viral RNA includes <b><span style="color: #E78877;">exons</span></b>, <b><span style="color: #2B93D8;">introns</span></b>. <br/><br/ >Another type of visual representation is used here to show this biological mechanism clearly.',
            animation: animationData33
          },
          {
            title: 'Variations of the transcript body part - Part04',
            text: 'This 2D scrollable animation explicitly introduces the mechanism of RNA splicing. <br/>(Use the wheel button of your mouse or trackpad to scroll and play this animation) <br/><br/> Within introns, a <b>splicing donor site</b> at the five prime end of the intron, and a <b>splicing acceptor site</b> at the three end of the intron are required to facilitate the intron removal. Although intron removal can occur automatically through chemical reactions, the splicing reactions need to perform in really high accuracy with the help of a splicing factory called <span style="color: #2BB673;"><b>spliceosome</b></span>. Spliceosome guarantees that the coding information is not lost or altered due to the inaccurate splicing. <br/><br/> 1. The first step of RNA splicing is characterized by the assembling of the spliceosome, which controls the chemical reactions of the splicing. Then, we can observe an intron lariat - “loop structure.” <br/><br/> 2. The first chemical reaction detaches the five prime end of the intron from the splice donor site. <br/><br/> 3. After the second reaction, the intron lariat is released from the splicing acceptor site of the intron. At the same time, the exons are joining back together. <br/><br/> 3. Lastly, a shorter mature spliced RNA transcript is formed.',
            imageSequence: ImageSequence1,
          },


          {
            title: 'Variations of the transcript body part - Part05',
            text: 'Now, I assume you understand the mechanism of RNA splicing. Please identify all the splice donor sites.',
            animation: animationData35
          },
          {
            title: 'Variations of the transcript body part - Part06',
            text: 'Good! The second one is the splice donor site for this RNA transcript.',
            animation: animationData36
          },
          {
            title: 'Variations of the transcript body part - Part07',
            text: 'In many complex viral transcription maps, viral RNAs have different intron removal (splicing) patterns - variations of the viral RNA body part.',
            animation: animationData37
          },
          {
            title: 'Variations of the transcript body part - Part08',
            text: 'To make this clearer, all the introns are added back to each of the viral RNA. These intron variations are also known as <b>alternative intron removal or alternative splicing.</b> <br/><br/>Please click the plus icon to open up a pop-up window discussing different types of RNA splicing mechanisms to generate these intron variations.',
            animation: animationData38,
            popup: {
              position: {
                left: 255,
                top: 40
              },
              title: ' ',
              html: PopupHTML9
            }
          },
          {
            title: 'Variations of the transcript body part - Part09',
            text: 'Many viruses do not express all their genes at once. Instead, they tightly control their gene expressions at different stages of infection. TMs visually communicate these stages using techniques such as color-coding with labels or labels only. In this example, we are using different colors as well as labels to indicate three different transcription stages.<br/><br/> E - early<br/> I - Intermediate<br/> L - Late<br/>',
            animation: animationData39
          },
          {
            title: 'Variations of the transcript body part - Part10',
            text: 'Adjacent to each RNA transcript, you may find a label indicating the identity of the corresponding protein product. For instance, RNA transcript with “Viral protein A” label beside it indicating that this RNA will finally translate into the protein A used to perform a specific function in viral infection, viral assembly, etc.',
            animation: animationData40
          }
        ],
      },
      
      // Section 4

      {
        name: 'ViraLiterate summary',
        pages: [
          {
            title: 'Summary',
            text: 'To summarize the whole story of a viral transcription map, an animation describing the adenovirus transcription map is used here to show all the critical steps of viral gene expressions, including transcription initiation, elongation, alternative polyadenylation, alternative splicing, and gene regulation at different infection stages. <br/><br/> Congratulations! <br/> Now you have finished all the modules in Viraliterate. For your interest only, There is an external website link that explains an example of viral transcription map, adenovirus transcription map, and how scientists take advantage of adenovirus transcription map to treat human diseases.  <br/> <a href="http://winfoc.com/wireframe/#"><span style="color: #1B75BC;"><b><em>Adenovirus Transcription Map</em></b></span> <br/></a>',
            animation: animationData41
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