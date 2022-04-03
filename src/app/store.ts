import { configureStore } from "@reduxjs/toolkit";

import shapesReducer from "./features/shapesSlice";
import quantityReducer from "./features/quantitySlice";
import difficultyReducer from "./features/difficultySlice";

export const store = configureStore({
  reducer: {
    shapes: shapesReducer,
    quantity: quantityReducer,
    difficulty: difficultyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
