import { CHANGE_FOCUS, CHANGE_PAGE } from "../constants/action-types";

export function changeFocus(payload) {
  return { type: CHANGE_FOCUS, focus: payload };
}

export function changePage(payload) {
  return { type: CHANGE_PAGE, currentPage: payload };
}