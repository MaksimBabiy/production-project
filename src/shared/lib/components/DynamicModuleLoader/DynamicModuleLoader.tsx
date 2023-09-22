import { Reducer } from "@reduxjs/toolkit";
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from "app/providers/StoreProvider/config/StateSchema";
import { AppDispatch } from "app/providers/StoreProvider/config/store";
import React, { ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type Props = {
  children: ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

const DynamicModuleLoader = ({
  children,
  removeAfterUnmount = true,
  reducers,
}: Props) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducers` });
    });
    return () => {
      Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
        removeAfterUnmount && store.reducerManager.remove(name);
        removeAfterUnmount && dispatch({ type: `@REMOVE ${name} reducers` });
      });
    };
  }, []);
  return <>{children}</>;
};

export default DynamicModuleLoader;
