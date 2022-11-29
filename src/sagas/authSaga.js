import { call, put, delay, takeLatest } from "redux-saga/effects";
import { AUTH_SIGN_IN, AUTH_SIGN_UP } from "../constants/path";

import { postData } from "../services/api";
import {
  postSignUpFailure,
  postSignUpRequest,
  postSignUpSuccess,
  postSignInFailure,
  postSignInRequest,
  postSignInSuccess,
} from "../slice/auth";

export function* postAuthSignUp({ payload }) {
  const { formData, setFocus, callback } = payload;
  try {
    const {
      data: { content },
    } = yield call(postData, { url: AUTH_SIGN_UP, data: formData });

    yield delay(800);
    yield put(postSignUpSuccess(content));
    callback?.(content);
  } catch (error) {
    const errorMessage = error?.response?.data?.content;
    const { message = errorMessage || "Something went wrong!" } = error;
    if (errorMessage) {
      setFocus?.(errorMessage);
    }
    yield put(postSignUpFailure(message));
  }
}

export function* postAuthSignIn({ payload }) {
  const { formData, setFocus, callback } = payload;
  try {
    const {
      data: { content },
    } = yield call(postData, { url: AUTH_SIGN_IN, data: formData });

    yield delay(800);
    yield put(postSignInSuccess(content));
    callback?.(content);
  } catch (error) {
    const errorMessage = error?.response?.data?.content;
    const { message = errorMessage || "Something went wrong!" } = error;
    if (errorMessage) {
      setFocus?.(errorMessage);
    }
    yield put(postSignInFailure(message));
  }
}

export default function* authSaga() {
  yield takeLatest(postSignUpRequest().type, postAuthSignUp);
  yield takeLatest(postSignInRequest().type, postAuthSignIn);
}
