import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { StateSchema } from "../config/StateSchema";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";

import { useNavigate } from "react-router-dom";
import { createReduxStore } from "../config/store";

type Props = {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
};

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const StoreProvider = ({ children, initialState, asyncReducers }: Props) => {
  const navigate = useNavigate();
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
    navigate
  );

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
