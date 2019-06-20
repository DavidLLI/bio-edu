import { CHANGE_FOCUS, CHANGE_PAGE, CHANGE_MODULE, CHANGE_SECTION, NAV_ACTIVE, SLIDING_END, CHANGE_TUTORIAL } from "../constants/action-types";
import { SLIDING_SPEED } from "../constants/numbers";

import store from "../stores/rootStore";

function slidingEnd(payload) {
	return { type: SLIDING_END, intervalID: payload };
}

export function changeFocus(payload) {
  return { type: CHANGE_FOCUS, focus: payload };
}

export function changePage(payload) {
	if (store.getState().sliding === false) {
		let intervalID = setInterval(() => {
	      store.dispatch(slidingEnd(intervalID));
	    }, SLIDING_SPEED + 100);
	    store.dispatch(changeFocus(payload));

	    return { type: CHANGE_PAGE, currentPage: payload };
	}
	
  	return { type: CHANGE_PAGE, currentPage: store.getState().currentPage };
}

export function changeSection(payload) {
	store.dispatch(changePage(0));
	return { type: CHANGE_SECTION, currentSection: payload };
}

export function changeModule(payload) {
	store.dispatch(changeSection(0));
	store.dispatch(changePage(0));
	return { type: CHANGE_MODULE, currentModule: payload };
}

export function navActive(payload) {
	return { type: NAV_ACTIVE, navActive: payload };
}

export function changeTutorial(payload) {
	return { type: CHANGE_TUTORIAL, tutorialActive: payload };
}