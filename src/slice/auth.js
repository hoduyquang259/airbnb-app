import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

export const ROOT_STATE_NAME = "auth";
const initialState = {
  signUp: {
    data: [],
    status: "idle",
    error: null,
  },
  signIn: {
    data: [],
    status: "idle",
    error: null,
  },
};

const authSlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState,
  reducers: {
    postSignUpRequest(state) {
      state.signUp.status = "loading";
    },
    postSignUpSuccess(state, action) {
      state.signUp.data = action.payload;
      state.signUp.status = "succeeded";
    },
    postSignUpFailure(state, action) {
      state.signUp.status = "failed";
      state.signUp.data = [];
      state.signUp.error = action.payload;
    },

    postSignInRequest(state) {
      state.signIn.status = "loading";
    },
    postSignInSuccess(state, action) {
      state.signIn.data = action.payload;
      state.signIn.status = "succeeded";
    },
    postSignInFailure(state, action) {
      state.signIn.status = "failed";
      state.signIn.data = [];
      state.signIn.error = action.payload;
    },
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = authSlice;
// Export the reducer, either as a default or named export
export default reducer;
// Extract and export each action creator by name
export const {
  postSignUpRequest,
  postSignUpSuccess,
  postSignUpFailure,
  postSignInRequest,
  postSignInSuccess,
  postSignInFailure,
} = actions;

// Create and export each selector create by name
export const rootSelector = (state) => state[ROOT_STATE_NAME] || {};
export const authAuthSignUpSelector = createSelector(
  rootSelector,
  ({ signUp }) => signUp
);

export const authAuthSignInSelector = createSelector(
  rootSelector,
  ({ signIn }) => signIn
);
