import { createSlice } from "@reduxjs/toolkit";
import { fetchDeleteUser, fetchUsers } from "./asyncActions";
import { IUser } from "../../utils/types";
import { IUserData } from "./types";

const initialState: IUserData = {
  data: [],
  status: "loading",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.data = [];
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.data = [];
        state.status = "loading";
      })
      .addCase(fetchDeleteUser.pending, (state) => {
        state.data = [];
        state.status = "loading";
      })
      .addCase(fetchDeleteUser.fulfilled, (state, action) => {
        const userId = action.payload;
        state.data = state.data.filter((user: IUser) => user?._id !== userId);
      })
      .addCase(fetchDeleteUser.rejected, (state) => {
        state.data = [];
        state.status = "loading";
      });
  },
});

export const userReducer = userSlice.reducer;
