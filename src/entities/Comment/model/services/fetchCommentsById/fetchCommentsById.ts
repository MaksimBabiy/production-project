import { createAsyncThunk } from "@reduxjs/toolkit";
import i18n from "shared/config/i18n/i18n";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "../../types/comment";

export const fetchCommentsById = createAsyncThunk<
  Comment[],
  string,
  ThunkConfig<string>
>("comments/fetchCommentsById", async (id, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.get<Comment[]>(`/comments`, {
      params: {
        articleId: id,
        _expand: "user",
      },
    });
    console.log(response);
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (e) {
    return rejectWithValue(i18n.t("Something wetns wrong!"));
  }
});
