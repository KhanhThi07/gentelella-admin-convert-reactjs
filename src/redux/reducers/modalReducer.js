import * as actionType from "../actionTypes";

const initialState = {
  modal: false,
};

export function modalReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.SHOW_MODAL:
      return {
        ...state,
        modal: true,
      };
    case actionType.HIDE_MODAL:
      return {
        ...state,
        modal: false,
      };
    default:
      return state;
  }
}
