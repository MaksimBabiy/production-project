import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter/slice/Counter";
import { userReducer } from "entities/User";
import { loginReducer } from "features/AuthByUserName";

const rootReducers: ReducersMapObject<StateSchema> = {
  user: userReducer,
  counter: counterReducer,
  loginForm: loginReducer,
};
export const store = configureStore<StateSchema>({
  reducer: rootReducers,
  devTools: __IS_DEV__,
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
