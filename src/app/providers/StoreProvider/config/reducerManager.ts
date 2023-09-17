import {
  AnyAction,
  Reducer,
  ReducersMapObject,
  combineReducers,
} from "@reduxjs/toolkit";
import { ReducerManager, StateSchema } from "./StateSchema";
import { StateSchemaKeys } from "./store";

export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: Array<StateSchemaKeys> = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (let key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key: StateSchemaKeys, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },

    remove: (key: StateSchemaKeys) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    },
  };
}
