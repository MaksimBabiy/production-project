import React, { CSSProperties } from "react";
import cls from "./Skeleton.module.scss";
import { classNames } from "shared/lib/classNames";
type Props = {
  classname?: string;
  width?: string | number;
  height?: string | number;
  border?: string | number;
  margin?: number | string;
};

const Skeleton = ({ width, height, border, margin, classname }: Props) => {
  const styles: CSSProperties = {
    width: width,
    height: height,
    borderRadius: border,
    marginBottom: margin || "20px",
  };
  return (
    <div
      style={styles}
      className={classNames(cls.skeleton, {}, [classname])}
    ></div>
  );
};

export default Skeleton;
