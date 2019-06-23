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
	return { type: CHANGE_PAGE, currentPage: payload };
}

export function changeSection(payload) {
	let { pageData, currentModule, currentSection, currentPage } = store.getState();
	let currentModuleLength = pageData[currentModule].length;
	if (payload >= 0 && payload < currentModuleLength) {
		store.dispatch(changePage(0));
		return { type: CHANGE_SECTION, currentSection: payload };
	}
	return { type: CHANGE_SECTION, currentSection: currentSection };
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