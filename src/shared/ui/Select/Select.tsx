import React, { ChangeEvent, memo, useMemo } from "react";
import cls from "./Select.module.scss";
export interface SelectOptions {
  value: string;
  content: string;
}
type Props = {
  label?: string;
  options: SelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
};

const Select = memo((props: Props) => {
  const { label, options, value, onChange, readonly } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };
  const optionList = useMemo(
    () =>
      options?.map((op) => (
        <option key={op.value} value={op.value}>
          {op.content}
        </option>
      )),
    []
  );
  return (
    <div className={cls.selectWrapper}>
      {label && <span>{label}</span>}
      <select
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>
  );
});

export default Select;
