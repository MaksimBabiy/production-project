import React, { ChangeEventHandler, InputHTMLAttributes, memo } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./Input.module.scss";

type HTMLOInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;

interface Props extends HTMLOInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

const Input = memo(
  ({ value, onChange, className, readonly, ...otherProps }: Props) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };
    return (
      <input
        readOnly={readonly}
        className={classNames(cls.Input, { [cls.readOnly]: readonly }, [
          className,
        ])}
        {...otherProps}
        value={value}
        onChange={onChangeHandler}
      />
    );
  }
);

export default Input;
