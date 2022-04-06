import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IQuantityState {
  value: number;
}

const initialState: IQuantityState = {
  value: 4,
};

export const quantitySlice = createSlice({
  name: "quantity",
  initialState,
  reducers: {
    setQuantity: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setQuantity } = quantitySlice.actions;

export default quantitySlice.reducer;
