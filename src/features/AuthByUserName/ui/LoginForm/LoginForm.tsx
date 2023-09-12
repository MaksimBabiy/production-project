import React from "react";
import { useTranslation } from "react-i18next";
import Button, { ButtonSize } from "shared/ui/Button/Button";
import cls from "./LoginModal.module.scss";
import { Input } from "shared/ui/Input";
type Props = {};

const LoginForm = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className={cls.loginForm}>
      <Input type="text" placeholder="User Name" className={cls.input} />
      <Input type="password" placeholder="Password" className={cls.input} />
      <Button size={ButtonSize.MEDIUM} className={cls.LoginBtn}>
        {t("Login")}
      </Button>
    </div>
  );
};

export default LoginForm;
