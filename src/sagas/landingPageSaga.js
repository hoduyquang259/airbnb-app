import { call, put, delay, takeLatest } from "redux-saga/effects";
import { ROOM_LIST } from "../constants/path";

import { getData } from "../services/api";
import {
  getRoomListFailure,
  getRoomListRequest,
  getRoomListSuccess,
} from "../slice/landingPage";

export function* getRoomList() {
  try {
    const {
      data: { content },
    } = yield call(getData, { url: ROOM_LIST });

    yield delay(800);
    yield put(getRoomListSuccess(content));
  } catch (error) {
    const { message = "Something went wrong!" } = error;

    yield put(getRoomListFailure(message));
  }
}

export default function* landingPageSaga() {
  yield takeLatest(getRoomListRequest().type, getRoomList);
}
