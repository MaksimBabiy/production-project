import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { Comment } from "entities/Comment";
import { getUserAuthData } from "entities/User";
import i18n from "shared/config/i18n/i18n";
import { getCommentText } from "../../selectors/getCommentText";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import { commentFormActions } from "../../slice/addCommentForm";

export interface CommentProps {
  articleId: string;
  userId: string;
  text: string;
}

export const addCommentForm = createAsyncThunk<
  Comment,
  void,
  ThunkConfig<string>
>(
  "formComment/addCommentForm",
  async (_, { dispatch, extra, rejectWithValue, getState }) => {
    const userData = getUserAuthData(getState());
    const text = getCommentText(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue("no data");
    }
    try {
      const response = await extra.api.post<Comment>("/comments", {
        articleId: article?.id,
        text,
        userId: userData.id,
      });
      if (!response.data) {
        throw new Error();
      }

      dispatch(commentFormActions.setText(""));

      return response.data;
    } catch (e) {
      return rejectWithValue(i18n.t("Your comment wasnt post"));
    }
  }
);
