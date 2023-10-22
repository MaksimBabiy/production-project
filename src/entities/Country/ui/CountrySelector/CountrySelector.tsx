import { Country } from "entities/Country/model/types/country";
import React, { useCallback } from "react";
import Select from "shared/ui/Select/Select";

type Props = {
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
};
const country = [
  { value: Country.POLAND, content: Country.POLAND },
  { value: Country.UKRAINE, content: Country.UKRAINE },
  { value: Country.USA, content: Country.USA },
];
export const CountrySelector = (props: Props) => {
  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, []);
  const { value, onChange, readonly } = props;
  return (
    <Select
      label="Your Country"
      options={country}
      value={value}
      readonly={readonly}
      onChange={onChangeHandler}
    />
  );
};
