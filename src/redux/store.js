import { combineReducers } from "redux";
import { sidebarReducer } from "./reducers/sidebarReducer";
import { modalReducer } from "./reducers/modalReducer";
export default combineReducers({
  sidebarToggle: sidebarReducer,
  modalToggle: modalReducer,
});
