import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IQuantityState {
  value: string;
}

const initialState: IQuantityState = {
  value: "Easy",
};

export const difficultySlice = createSlice({
  name: "difficulty",
  initialState,
  reducers: {
    setDifficulty: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setDifficulty } = difficultySlice.actions;

export default difficultySlice.reducer;
