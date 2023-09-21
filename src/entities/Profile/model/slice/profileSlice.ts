import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProfileSchema } from "../types/profile";
import { error } from "console";

const initialState = {
  readonly: true,
  isLoading: false,
  data: undefined,
  error: undefined,
} as ProfileSchema;
const profileSclice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});
export const { actions: profileActions } = profileSclice;
export const { reducer: profileReducer } = profileSclice;
