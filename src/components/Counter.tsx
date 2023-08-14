import React, { useState } from "react";
import clasess from "./Counter.module.scss";
type Props = {};

const Counter = (props: Props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <p className={clasess.green}>{count}</p>
    </div>
  );
};

export default Counter;
