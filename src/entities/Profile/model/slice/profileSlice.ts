import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Profile, ProfileSchema, ValidateProfileError } from "../types/profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { stat } from "fs";
import { postProfileData } from "../services/postProfileData/postProfileData";

const initialState = {
  readonly: true,
  isLoading: false,
  data: undefined,
  error: undefined,
  validateError: [],
} as ProfileSchema;
const profileSclice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    changeReadOnly: (state) => {
      state.readonly = !state.readonly;
    },
    cancelEdit: (state) => {
      state.readonly = !state.readonly;
      state.form = state.data;
      state.validateError = [];
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
  },
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
          state.form = action.payload;
        }
      )
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(postProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        postProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.form = action.payload;
          state.readonly = true;
          state.validateError = undefined;
        }
      )
      .addCase(postProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.validateError = action.payload;
      });
  },
});
export const { actions: profileActions } = profileSclice;
export const { reducer: profileReducer } = profileSclice;
