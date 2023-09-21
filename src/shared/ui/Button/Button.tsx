import React, { ButtonHTMLAttributes, FC, memo } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}
export enum ButtonSize {
  MEDIUM = "size_m",
  LARGE = "size_l",
  XLARGE = "size_xl",
}
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  square?: boolean;
  theme?: ThemeButton;
  size?: ButtonSize;
  disabled?: boolean;
}

const Button: FC<Props> = memo((props) => {
  const { children, className, size, square, disabled, theme, ...otherProps } =
    props;
  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  };
  return (
    <button
      disabled={disabled}
      {...otherProps}
      className={classNames(cls.button, mods, [
        cls[theme],
        className,
        cls[size],
      ])}
    >
      {children}
    </button>
  );
});

export default Button;
