import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { Comment, fetchCommentsById } from "entities/Comment";
import { getUserAuthData } from "entities/User";
import i18n from "shared/config/i18n/i18n";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import { getCommentText } from "features/AddCommentForm/model/selectors/getCommentText";
import { commentFormActions } from "features/AddCommentForm";

export interface CommentProps {
  articleId: string;
  userId: string;
  text: string;
}

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  "formComment/addCommentForArticle",
  async (text, { dispatch, extra, rejectWithValue, getState }) => {
    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());
    console.log("erorr");
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
      dispatch(fetchCommentsById(article.id));
      return response.data;
    } catch (e) {
      return rejectWithValue(i18n.t("Your comment wasnt post"));
    }
  }
);
