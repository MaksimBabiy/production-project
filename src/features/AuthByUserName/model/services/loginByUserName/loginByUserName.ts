import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ThunkConfig,
} from "app/providers/StoreProvider/config/StateSchema";

import { User, userActions } from "entities/User";
import i18n from "shared/config/i18n/i18n";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface loginByUserNameProps {
  username: string;
  password: string;
}
export const loginByUserName = createAsyncThunk<
  User,
  loginByUserNameProps,
  ThunkConfig<string>
>(
  "login/loginByUserName",
  async ({ username, password }, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.post("/login", {
        username,
        password,
      });
      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data)
      );
      dispatch(userActions.setAuthData(response.data));
      //extra.navigate?.("/about");
      return response.data;
    } catch (e) {
      return rejectWithValue(
        i18n.t("You entered an incorrect login or password")
      );
    }
  }
);
