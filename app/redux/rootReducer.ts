import { combineReducers } from "redux";

import admin from "./slices/admin";

const rootReducer = combineReducers({
  admin,
});

export default rootReducer;
