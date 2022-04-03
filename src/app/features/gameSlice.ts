import { createSlice } from "@reduxjs/toolkit";

export interface IGameState {
  inProgress: boolean;
}

const initialState: IGameState = {
  inProgress: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    toggleInProgress: (state) => {
      state.inProgress = !state.inProgress;
    },
  },
});

export const { toggleInProgress } = gameSlice.actions;

export default gameSlice.reducer;
