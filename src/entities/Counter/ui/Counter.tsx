import React from "react";
import Button from "shared/ui/Button/Button";
import { counterActions } from "../slice/Counter";

import { useDispatch, useSelector } from "react-redux";
import { getCounterValue } from "../selectors/getCounterValue/getCounterValue";

type Props = {};

const Counter = (props: Props) => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increament = () => {
    dispatch(counterActions.increment());
  };
  const decreament = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <div>{counterValue}</div>
      <Button onClick={increament}>+</Button>
      <Button onClick={decreament}>-</Button>
    </div>
  );
};

export default Counter;
