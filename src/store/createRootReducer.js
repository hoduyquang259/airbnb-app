import { combineReducers } from "redux";

import landingPageReducer, {
  ROOT_STATE_NAME as LANDING_PAGE,
} from "../slice/landingPage";

import authReducer, { ROOT_STATE_NAME as AUTH_PAGE } from "../slice/auth";

export default function createRootReducer() {
  const rootReducer = combineReducers({
    [LANDING_PAGE]: landingPageReducer,
    [AUTH_PAGE]: authReducer,
  });

  return rootReducer;
}
