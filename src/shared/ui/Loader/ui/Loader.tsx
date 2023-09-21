import React, { memo } from "react";
import cls from "./Loader.module.scss";
type Props = {};

const Loader = memo((props: Props) => {
  return <span className={cls.loader}></span>;
});

export default Loader;
