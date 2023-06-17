import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios";

export const fetchDishes = createAsyncThunk("dishes/fetchDishes", async () => {
  const { data } = await instance.get("/dishes");
  return data;
});

export const fetchRemoveDish = createAsyncThunk(
  "dishes/fetchRemoveDish",
  async (id) => await instance.delete(`/dishes/${id}`)
);
