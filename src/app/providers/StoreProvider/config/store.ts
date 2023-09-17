import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter/slice/Counter";
import { userReducer } from "entities/User";

import { createReducerManager } from "./reducerManager";

const rootReducers: ReducersMapObject<StateSchema> = {
  user: userReducer,
  counter: counterReducer,
};
const reducerManager = createReducerManager(rootReducers);
export const store = configureStore<StateSchema>({
  reducer: reducerManager.reduce,
  devTools: __IS_DEV__,
});

//@ts-ignore
store.reducerManager = reducerManager;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type StateSchemaKeys = keyof StateSchema;
