import { Currency } from "entities/Currency/model/types/types";
import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Select from "shared/ui/Select/Select";

type Props = {
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
};
const currency = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.UAH, content: Currency.UAH },
  { value: Currency.USD, content: Currency.USD },
];
export const CurrencySelector = memo((props: Props) => {
  const { value, onChange, readonly } = props;
  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, []);

  const { t } = useTranslation();
  return (
    <Select
      readonly={readonly}
      label={t("Currency")}
      options={currency}
      value={value}
      onChange={onChangeHandler}
    />
  );
});
