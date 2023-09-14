import React from "react";
import cls from "./Text.module.scss";
import { classNames } from "shared/lib/classNames";
export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}
type Props = {
  title?: string;
  text?: string;
  theme?: TextTheme;
};

const Text = ({ title, text, theme }: Props) => {
  return (
    <div className={classNames("", {}, [cls[theme]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};

export default Text;
