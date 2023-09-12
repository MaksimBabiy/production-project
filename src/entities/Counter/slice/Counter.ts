import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CounterSchema } from "../types/counterSchema";

const initialState = { value: 0 } as CounterSchema;
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});
export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
