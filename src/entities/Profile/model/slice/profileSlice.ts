import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/profile";
import { error } from "console";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { actions: profileActions } = profileSclice;
export const { reducer: profileReducer } = profileSclice;
