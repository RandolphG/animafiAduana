import systemReducer, {
  requestLoginAction,
  requestLoginSuccessAction,
  requestCurrentUserActionSuccess,
  requestLoginActionFailure,
} from "./system/slice";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { doLoginEpic } from "./system";
import { ActionType } from "typesafe-actions";
import {
  connectRouter,
  routerMiddleware,
  RouterState, // @ts-ignore
} from "connected-react-router";

type SystemActionsWithPayload =
  | typeof requestLoginAction
  | typeof requestLoginSuccessAction
  | typeof requestCurrentUserActionSuccess
  | typeof requestLoginActionFailure;

type SystemActions = ActionType<SystemActionsWithPayload>;

type finalActions = SystemActions;

const epics = combineEpics(doLoginEpic);

//@ts-ignore
export const history = createBrowserHistory<RouterState>();

export const rootReducer = combineReducers({
  router: connectRouter(history),
  system: systemReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const epicMiddleware = createEpicMiddleware<
  finalActions, // input actions
  finalActions, // output actions
  RootState
>();

function configureAppStore(initialState?: any) {
  // configure middlewares
  const middlewares = [routerMiddleware(history), epicMiddleware];
  // create store
  return configureStore<RootState>({
    reducer: rootReducer,
    //@ts-ignore
    middleware: middlewares,
    preloadedState: initialState,
  });
}

export const store = configureAppStore();

export * from "./system";

epicMiddleware.run(epics);
