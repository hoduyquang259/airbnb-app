import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

export const ROOT_STATE_NAME = "landingPage";
const initialState = {
  roomList: {
    data: {},
    status: "idle",
    error: null,
  },
};

const landingPageSlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState,
  reducers: {
    getRoomListRequest(state) {
      state.roomList.status = "loading";
    },
    getRoomListSuccess(state, action) {
      state.roomList.data = action.payload;
      state.roomList.status = "succeeded";
    },
    getRoomListFailure(state, action) {
      state.roomList.status = "failed";
      state.roomList.data = {};
      state.roomList.error = action.payload;
    },
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = landingPageSlice;
// Export the reducer, either as a default or named export
export default reducer;
// Extract and export each action creator by name
export const { getRoomListRequest, getRoomListSuccess, getRoomListFailure } =
  actions;

// Create and export each selector create by name
export const rootSelector = (state) => state[ROOT_STATE_NAME] || {};
export const landingPageSelector = createSelector(
  rootSelector,
  ({ roomList }) => roomList
);
