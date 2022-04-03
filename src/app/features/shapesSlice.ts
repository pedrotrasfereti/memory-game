import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ShapesState {
  value: string[];
}

const initialState: ShapesState = {
  value: ["Square"], // shapes array
};

export const shapesSlice = createSlice({
  name: "shapes",
  initialState,
  reducers: {
    addShape: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeShape: (state, action: PayloadAction<string>) => {
      const shapeIndex = state.value.findIndex(
        (shapeName) => shapeName === action.payload
      );

      state.value.splice(shapeIndex, 1);
    },
  },
});

export const { addShape, removeShape } = shapesSlice.actions;

export default shapesSlice.reducer;
