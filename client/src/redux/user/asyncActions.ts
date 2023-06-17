import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const { data } = await instance.get("/users");
  return data;
});

export const fetchRegisterUser = createAsyncThunk(
  "users/fetchRegister",
  async (params) => {
    const { data } = await instance.post("/users/register", params);
    return data;
  }
);

export const fetchDeleteUser = createAsyncThunk(
  "users/fetchDeleteUser",
  async (userId: string) => {
    await instance.delete(`/users/${userId}`);
    return userId;
  }
);
