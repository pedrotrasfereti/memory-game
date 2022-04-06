import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IGameState {
  inProgress: boolean;
  clickedIds: string[];
  gameResult: string;
  score: number;
  best: number;
}

const initialState: IGameState = {
  inProgress: false,
  clickedIds: [],
  gameResult: "",
  score: 0,
  best: 0,
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
    setGameResult: (state, action: PayloadAction<string>) => {
      state.gameResult = action.payload;
    },
    addScore: (state, action: PayloadAction<number>) => {
      state.score += action.payload;
    },
    clearScore: (state) => {
      state.score = 0;
    },
    setBest: (state, action: PayloadAction<number>) => {
      state.best = action.payload;
    },
  },
});

export const {
  toggleInProgress,
  addClicked,
  clearClicked,
  setGameResult,
  addScore,
  clearScore,
  setBest,
} = gameSlice.actions;

export default gameSlice.reducer;
