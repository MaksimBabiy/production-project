import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraArg } from "app/providers/StoreProvider/config/StateSchema";
import i18n from "shared/config/i18n/i18n";

import { Profile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  { rejectValue: string; extra: ThunkExtraArg }
>("profile/fetchProfileData", async (_, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.get<Profile>("/profile");

    return response.data;
  } catch (e) {
    return rejectWithValue(
      i18n.t("You entered an incorrect login or password")
    );
  }
});
