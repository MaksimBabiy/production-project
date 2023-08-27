import React from "react";
import cls from "./Loader.module.scss";
type Props = {};

const Loader = (props: Props) => {
  return <span className={cls.loader}></span>;
};

export default Loader;
