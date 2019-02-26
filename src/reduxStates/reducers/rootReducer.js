import { CHANGE_FOCUS, CHANGE_PAGE, SLIDING_END, CHANGE_PROGRESS } from "../constants/action-types";
import Image1 from '../../assets/Adenovirusicon.png';
import Image2 from '../../assets/crispr.jpg';
import Image3 from '../../assets/dna-structure.jpg';
import Image4 from '../../assets/Screen_Shot.png';


const initialState = {
  pageData:[
    {
      'title': 'Preface: What does a TM look like?',
      'description': 'Understanding the Basic Visual Language of TM - using a hypothetical TM Viral genome',
      'theme': 'Module 1 Sections Menu',
      'image': Image1
    },
    {
      'title': 'Urban umbrellas',
      'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta porro, tempora consequuntur vel dolore assumenda aspernatur cum dignissimos unde reprehenderit sint? Neque, id consequuntur. Quibusdam sit officiis debitis corrupti. Quasi.',
      'theme': 'Urban',
      'image': Image2,
      'popup': {
        'title': 'popup',
        'description': 'popup body',
        'image': Image1
      }
    },
    {
      'title': 'A lonely road',
      'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta porro, tempora consequuntur vel dolore assumenda aspernatur cum dignissimos unde reprehenderit sint? Neque, id consequuntur. Quibusdam sit officiis debitis corrupti. Quasi.',
      'theme': 'Lifestyle',
      'image': Image3,
      'afterImage': 'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg'
    },
    {
      'title': 'A lonely road',
      'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta porro, tempora consequuntur vel dolore assumenda aspernatur cum dignissimos unde reprehenderit sint? Neque, id consequuntur. Quibusdam sit officiis debitis corrupti. Quasi.',
      'theme': 'Lifestyle',
      'image': Image4
    }
  ],
	focus: 0,
	currentPage: 0,
  sliding: false,
  progress: 0
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
        action.currentPage < state.pageData.length) {
      state = Object.assign({}, state, {
          currentPage: action.currentPage,
          sliding: true
      });
    }
  }
  else if (action.type === SLIDING_END) {
    clearInterval(action.intervalID);
    state = Object.assign({}, state, {
        sliding: false
    });
  }
  else if (action.type === CHANGE_PROGRESS) {
    if (action.progress < 0) {
      state = Object.assign({}, state, {
        progress: 0
      });
    }
    else if (action.progress > 1) {
      state = Object.assign({}, state, {
        progress: 1
      });
    }
    else {
      state = Object.assign({}, state, {
        progress: action.progress
      });
    }
  }
  return state;
}

export default rootReducer;