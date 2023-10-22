import { createAsyncThunk } from "@reduxjs/toolkit";

import i18n from "shared/config/i18n/i18n";
import { Profile, ValidateProfileError } from "../../types/profile";
import { ThunkConfig } from "app/providers/StoreProvider";
import { useSelector } from "react-redux";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { ValidateProfileData } from "../ValidateProfileData/ValidateProfileData";

export const postProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>("profile/postProfileData", async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  try {
    const req = await extra.api.put<Profile>(
      "/profile",
      getState().profile?.form
    );
    const errors = ValidateProfileData(getState().profile?.form as Profile);

    if (errors.length) {
      return rejectWithValue(errors);
    }
    if (!req.data) {
      throw new Error();
    }
    return req.data;
  } catch (e) {
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
