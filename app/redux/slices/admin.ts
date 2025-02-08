import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "admin",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const selectUser = (state: { admin: { user: string } }) =>
  state.admin.user;

export default slice.reducer;

export const { setUser } = slice.actions;
