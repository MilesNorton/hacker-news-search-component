import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootReducer, rootEpic } from "@redux";

import { RootAction, RootState } from "@utils";

export const configureStore = () => {
  const epicMiddleware = createEpicMiddleware<
    RootAction,
    RootAction,
    RootState
  >();

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
};
