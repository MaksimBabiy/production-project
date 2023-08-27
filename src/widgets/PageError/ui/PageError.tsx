import React from "react";
import { useTranslation } from "react-i18next";
import cls from "./PageError.module.scss";
import Button, { ThemeButton } from "shared/ui/Button/Button";
type Props = {};

const PageError = (props: Props) => {
  const { t } = useTranslation();
  const OnReload = () => {
    location.reload();
  };
  return (
    <div className={cls.PageError}>
      <p className={cls.PageErrorText}>{t("Something wents wrong")}</p>
      <Button theme={ThemeButton.CLEAR} onClick={OnReload}>
        {t("Reload page")}
      </Button>
    </div>
  );
};

export default PageError;
