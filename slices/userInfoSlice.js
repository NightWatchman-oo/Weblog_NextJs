import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

function userInfo(state, action) {
  state.value = action.payload;
}

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    userInfo,
  },
});
export const { userInfo: userInfoAction } = userInfoSlice.actions;

export default userInfoSlice.reducer;
