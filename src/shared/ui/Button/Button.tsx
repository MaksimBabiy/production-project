import React, { ButtonHTMLAttributes, FC, memo } from "react";
import cls from "./Button.module.scss";
import { Mods, classNames } from "shared/lib/classNames";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
  OUTLINE_RED = "outline_red",
  OUTLINE_GREEN = "outline_green",
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
  isHover?: boolean;
}

const Button: FC<Props> = memo((props) => {
  const {
    children,
    className,
    size = ButtonSize.MEDIUM,
    square,
    disabled,
    isHover = false,
    theme = ThemeButton.OUTLINE,
    ...otherProps
  } = props;
  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.hover]: isHover,
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
