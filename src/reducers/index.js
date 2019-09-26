import { combineReducers } from "redux";
import settingsReducer from "./settingsReducer";

const allReducers = combineReducers({
  settings: settingsReducer
});

export default allReducers;
