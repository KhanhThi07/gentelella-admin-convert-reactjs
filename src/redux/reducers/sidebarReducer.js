import * as actionType from "../actionTypes";

const initialState = {
  classes: "",
  loading: false,
};

export function sidebarReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.SHOW_SIDEBAR:
      return {
        ...state,
        classes: action.payload,
      };
    case actionType.HIDE_SIDEBAR:
      return {
        ...state,
        classes: action.payload,
      };
    default:
      return state;
  }
}
