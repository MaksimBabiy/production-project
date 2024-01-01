import { StateSchema } from "app/providers/StoreProvider";

export const getCommentsData = (state: StateSchema) => state.comments?.entities;
export const getCommentsIsLoading = (state: StateSchema) =>
  state.comments?.isLoading;
export const getCommentsError = (state: StateSchema) => state.comments?.error;
