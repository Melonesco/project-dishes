import { createSlice } from "@reduxjs/toolkit";
import { fetchDishes, fetchRemoveDish } from "./asyncAction";
import instance from "../../axios";
import { IDish } from "../../utils/types";

interface DishesState {
  dishes: {
    items: IDish[];
    status: "loading" | "loaded" | "error";
  };
}

const initialState: DishesState = {
  dishes: {
    items: [],
    status: "loading",
  },
};

const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {
    addDish: (state, action) => {
      const data = action.payload;

      instance
        .post("/dishes", data)
        .then((res) => console.log("OK", res))
        .catch((err) => console.log(err));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishes.pending, (state) => {
        state.dishes.items = [];
        state.dishes.status = "loading";
      })
      .addCase(fetchDishes.fulfilled, (state, action) => {
        state.dishes.items = action.payload;
        state.dishes.status = "loaded";
      })
      .addCase(fetchDishes.rejected, (state) => {
        state.dishes.items = [];
        state.dishes.status = "error";
      })
      .addCase(fetchRemoveDish.pending, (state, action) => {
        state.dishes.items = state.dishes.items.filter(
          (obj) => obj._id !== action.payload
        );
      });
  },
});

export const { addDish } = dishesSlice.actions;

export const DishReducer = dishesSlice.reducer;
