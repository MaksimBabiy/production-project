import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { ArticleDetailsSchema } from "../types/articleDetailsSchema";
import { Article, fetchArticleData } from "entities/Article";

const initialState: ArticleDetailsSchema = { isLoading: false };
const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Article>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticleData.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchArticleData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
