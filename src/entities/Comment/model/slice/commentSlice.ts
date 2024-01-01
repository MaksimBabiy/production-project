import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { Comment, CommentSchema } from "../types/comment";
import { fetchCommentsById } from "../services/fetchCommentsById/fetchCommentsById";
import { StateSchema } from "app/providers/StoreProvider";

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});
export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.comments || commentsAdapter.getInitialState()
);

const commentSlice = createSlice({
  name: "comments",
  initialState: commentsAdapter.getInitialState<CommentSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCommentsById.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.isLoading = false;
          commentsAdapter.setAll(state, action.payload);
        }
      )
      .addCase(fetchCommentsById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { actions: commentActions } = commentSlice;
export const { reducer: commentReducer } = commentSlice;
