import { CHANGE_FOCUS, CHANGE_PAGE } from "../constants/action-types";

const initialState = {
	focus: 0,
	currentPage: 0
};

function rootReducer(state = initialState, action) {
  if (action.type === CHANGE_FOCUS) {
  	state = Object.assign({}, state, {
        focus: action.focus
    });
  }
  else if (action.type === CHANGE_PAGE) {
  	state = Object.assign({}, state, {
        currentPage: action.currentPage
    });
  }
  return state;
}

export default rootReducer;