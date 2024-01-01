import { createAsyncThunk } from "@reduxjs/toolkit";

import i18n from "shared/config/i18n/i18n";
import { Profile } from "../../types/profile";
import { ThunkConfig } from "app/providers/StoreProvider";

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<string>
>("profile/fetchProfileData", async (_id, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.get<Profile>(`/profile/${_id}`);
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (e) {
    return rejectWithValue(
      i18n.t("You entered an incorrect login or password")
    );
  }
});
