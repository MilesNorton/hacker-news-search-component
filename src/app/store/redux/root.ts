import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";

import * as reducers from "@reducers";
import * as epics from "@epics";

export const rootEpic = combineEpics(...Object.values(epics));

export const rootReducer = combineReducers({
  ...reducers,
});
