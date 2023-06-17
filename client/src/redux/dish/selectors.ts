import { RootState } from "../store";

export const selectIsDish = (state: RootState) => state.dish.dishes.items;
