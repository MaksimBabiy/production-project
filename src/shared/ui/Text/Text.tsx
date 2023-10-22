import React, { memo } from "react";
import cls from "./Text.module.scss";
import { classNames } from "shared/lib/classNames";

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}
type Props = {
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
};

const Text = memo(({ title, text, theme, align = TextAlign.LEFT }: Props) => {
  return (
    <div
      className={classNames("", {}, [
        cls[theme as TextTheme],
        cls[align as TextAlign],
      ])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});

export default Text;
