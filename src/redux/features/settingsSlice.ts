import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISettingsState {
  shapes: string[];
  quantity: number;
  difficulty: string;
  clickAnimation: boolean;
}

const initialState: ISettingsState = {
  shapes: ["Square"], // shapes array
  quantity: 4, // button quantity
  difficulty: "Easy", // difficulty
  clickAnimation: true, // enable click animation
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    addShape: (state, action: PayloadAction<string>) => {
      state.shapes.push(action.payload);
    },
    removeShape: (state, action: PayloadAction<string>) => {
      const shapeIndex = state.shapes.findIndex(
        (shapeName) => shapeName === action.payload
      );

      state.shapes.splice(shapeIndex, 1);
    },
    setQuantity: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
    },
    setDifficulty: (state, action: PayloadAction<string>) => {
      state.difficulty = action.payload;
    },
    toggleClickAnimation: (state) => {
      state.clickAnimation = !state.clickAnimation;
    },
  },
});

export const {
  addShape,
  removeShape,
  setQuantity,
  setDifficulty,
  toggleClickAnimation,
} = settingsSlice.actions;

export default settingsSlice.reducer;
