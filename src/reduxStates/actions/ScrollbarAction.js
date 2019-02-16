import { CHANGE_FOCUS, CHANGE_PAGE, SLIDING_END } from "../constants/action-types";
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