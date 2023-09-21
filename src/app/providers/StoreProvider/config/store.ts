import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter/slice/Counter";
import { userReducer } from "entities/User";

import { createReducerManager } from "./reducerManager";
import { createReduxStore } from "./testStore";
import { useDispatch } from "react-redux";

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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
export type StateSchemaKeys = keyof StateSchema;
