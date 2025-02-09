import { combineReducers } from "redux";

import admin from "./slices/admin";
import data from "./slices/data";

const rootReducer = combineReducers({
  admin,
  data,
});

export default rootReducer;
