import * as actionType from "../actionTypes";

export function showModal() {
  return {
    type: actionType.SHOW_MODAL,
  };
}
export function hideModal() {
  return {
    type: actionType.HIDE_MODAL,
  };
}
