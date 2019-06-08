 import { CHANGE_FOCUS, CHANGE_PAGE, SLIDING_END, CHANGE_MODULE, CHANGE_SECTION } from "../constants/action-types";

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

import animationData1 from '../../assets/Animation/data-01.json';
import animationData2 from '../../assets/Animation/data-02.json';
import animationData3 from '../../assets/Animation/data-03.json';
import animationData4 from '../../assets/Animation/data-04.json';

const initialState = {
  pageData:[
    // Module 1
    [
      // Section 1
      {
        name: 'Module 1 section 1 title',
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
        name: 'Module 1 section 2 title',
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
        ],
      },
      // Section 3
      {
        name: 'Module 1section 3 title',
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
        ],
      },
      // Section 4
      {
        name: 'Module 1 section 4 title',
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
          }
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
  ],
  focus: 0,
  currentModule: 0,
  currentSection: 0,
  currentPage: 0,
  sliding: false
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
  else if (action.type === SLIDING_END) {
    clearInterval(action.intervalID);
    state = Object.assign({}, state, {
        sliding: false
    });
  }

  return state;
}

export default rootReducer;