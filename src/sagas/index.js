import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import landingPageSaga from "./landingPageSaga";

export default function* rootSaga() {
  yield all([landingPageSaga(),authSaga() ]);
}
