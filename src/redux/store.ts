import { configureStore } from "@reduxjs/toolkit";

import settingsReducer from "./features/settingsSlice";
import gameReducer from "./features/gameSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
