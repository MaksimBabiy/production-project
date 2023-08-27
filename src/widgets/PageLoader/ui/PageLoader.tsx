import React from "react";
import cls from "./PageLoader.module.scss";
import { Loader } from "shared/ui/Loader";
type Props = {};

const PageLoader = (props: Props) => {
  return (
    <div className={cls.pageLoader}>
      <Loader />
    </div>
  );
};

export default PageLoader;
