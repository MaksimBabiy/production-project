import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddCommentFormSchema } from "../types/addCommentForm";
import { addCommentForArticle } from "pages/ArticleDetailedPage/model/services/addCommentForArticle";

const initialState = {
  isLoading: false,
  text: undefined,
  error: undefined,
} as AddCommentFormSchema;
const commentFormSlice = createSlice({
  name: "commentFormSlice",
  initialState,
  reducers: {
    setText: (state: AddCommentFormSchema, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCommentForArticle.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(addCommentForArticle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.text = action.payload.text;
      })
      .addCase(addCommentForArticle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { actions: commentFormActions } = commentFormSlice;
export const { reducer: commentFormReducer } = commentFormSlice;
