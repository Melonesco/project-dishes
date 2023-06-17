import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { DishReducer } from "./dish/slice";
import { userReducer } from "./user/slice";
import { filterReducer } from "./filter/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dish: DishReducer,
    users: userReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
