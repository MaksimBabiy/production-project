import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { StateSchema } from "../config/StateSchema";
import { DeepPartial } from "@reduxjs/toolkit";
import { createReduxStore } from "../config/testStore";

type Props = {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
};

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const StoreProvider = ({ children, initialState }: Props) => {
  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
