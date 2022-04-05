import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IGameState {
  inProgress: boolean;
  clickedIds: string[];
}

const initialState: IGameState = {
  inProgress: false,
  clickedIds: [],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    toggleInProgress: (state) => {
      state.inProgress = !state.inProgress;
    },
    addClicked: (state, action: PayloadAction<string>) => {
      state.clickedIds.push(action.payload);
    },
    clearClicked: (state) => {
      state.clickedIds = [];
    },
  },
});

export const { toggleInProgress, addClicked, clearClicked } = gameSlice.actions;

export default gameSlice.reducer;
