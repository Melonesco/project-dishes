import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterSliceState } from "./types";

const initialState: IFilterSliceState = {
  searchValue: "",
  categoryIndex: 0,
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryIndex = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<IFilterSliceState>) {
      if (Object.keys(action.payload).length) {
        state.currentPage = Number(action.payload.currentPage);
        state.categoryIndex = Number(action.payload.categoryIndex);
      } else {
        state.currentPage = 1;
        state.categoryIndex = 0;
      }
    },
  },
});
export const { setCategoryId, setCurrentPage, setFilters, setSearchValue } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;
