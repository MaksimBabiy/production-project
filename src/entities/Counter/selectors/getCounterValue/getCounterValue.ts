import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "../getCounter/GetCounter";

export const getCounterValue = createSelector(
  getCounter,
  (counter) => counter.value
);
