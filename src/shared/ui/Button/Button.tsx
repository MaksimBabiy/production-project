import React, { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<Props> = (props) => {
  const { children, className, theme, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      className={classNames(cls.button, {}, [cls[theme], className])}
    >
      {children}
    </button>
  );
};

export default Button;
