import React, { memo } from "react";
import cls from "./Text.module.scss";
import { classNames } from "shared/lib/classNames";

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
  JUSTIFY = "justify",
}

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}
type Props = {
  classnames?: string;
  title?: string;
  text?: string | number;
  theme?: TextTheme;
  align?: TextAlign;
};

const Text = memo(
  ({ title, text, theme, align = TextAlign.LEFT, classnames }: Props) => {
    return (
      <div
        className={classNames("", {}, [
          cls[theme as TextTheme],
          cls[align as TextAlign],
          classnames,
        ])}
      >
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
      </div>
    );
  }
);

export default Text;
