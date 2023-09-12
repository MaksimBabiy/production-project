import React, { ChangeEventHandler, InputHTMLAttributes, memo } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./Input.module.scss";

type HTMLOInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface Props extends HTMLOInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input = memo(({ value, onChange, className, ...otherProps }: Props) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  return (
    <input
      className={classNames(cls.Input, {}, [className])}
      {...otherProps}
      value={value}
      onChange={onChangeHandler}
    />
  );
});

export default Input;
