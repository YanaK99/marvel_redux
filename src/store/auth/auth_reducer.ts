import { createSlice } from "@reduxjs/toolkit";

export type AuthState = {
  isAuthorized: boolean;
};

const initialState: AuthState = {
  isAuthorized: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthorized = true;
    },
    logout: (state) => {
      state.isAuthorized = false;
    },
  },
});

export default authSlice.reducer;
