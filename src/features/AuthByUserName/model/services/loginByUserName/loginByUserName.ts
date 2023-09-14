import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
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
  { rejectValue: string }
>("login/loginByUserName", async ({ username, password }, thunkAPI) => {
  try {
    const response = await axios.post("http://localhost:8000/login", {
      username,
      password,
    });
    if (!response.data) {
      throw new Error();
    }
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(
      i18n.t("You entered an incorrect login or password")
    );
  }
});
