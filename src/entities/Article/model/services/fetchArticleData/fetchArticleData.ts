import { createAsyncThunk } from "@reduxjs/toolkit";
import i18n from "shared/config/i18n/i18n";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";

export const fetchArticleData = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>("article/fetchArticleData", async (id, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.get<Article>(`/articles/${id}`);
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
