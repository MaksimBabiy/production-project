import {
  CombinedState,
  Reducer,
  ReducersMapObject,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";
import { $api } from "shared/api/api";
import { NavigateOptions, To } from "react-router-dom";
import { counterReducer } from "entities/Counter";
import { articleReducer } from "entities/Article";

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    counter: counterReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate,
  };

  const store = configureStore({
    //@ts-ignore
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  });
  //@ts-ignore
  store.reducerManager = reducerManager;
  return store;
}
export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
// export type RootState = ReturnType<typeof createReduxStore>["getState"];
// type DispatchFunc = () => AppDispatch;
// export const useAppDispatch: DispatchFunc = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
