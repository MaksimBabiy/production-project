import React, { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Button, { ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import cls from "./LoginModal.module.scss";
import { Input } from "shared/ui/Input";
import { useDispatch, useSelector, useStore } from "react-redux";
import { loginActions } from "features/AuthByUserName/model/slice/loginSlice";
import { loginByUserName } from "features/AuthByUserName/model/services/loginByUserName/loginByUserName";
import { AppDispatch } from "app/providers/StoreProvider/config/store";
import Text, { TextTheme } from "shared/ui/Text/Text";
import { getLoginUsername } from "features/AuthByUserName/model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "features/AuthByUserName/model/selectors/getLoginPassword/getLoginPassword";
import { getLoginLoading } from "features/AuthByUserName/model/selectors/getLoginLoading/getLoginLoading";
import { getLoginError } from "features/AuthByUserName/model/selectors/getLoginError/getLoginError";

const LoginForm = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

  const onChangeUserName = useCallback(
    (e: string) => {
      dispatch(loginActions.setUserName(e));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (e: string) => {
      dispatch(loginActions.setPassword(e));
    },
    [dispatch]
  );
  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={cls.loginForm}>
      <Text title={t("Login Form")} />
      {error && <Text theme={TextTheme.ERROR} text={error} />}
      <Input
        type="text"
        placeholder="User Name"
        className={cls.input}
        onChange={onChangeUserName}
        value={username}
      />
      <Input
        type="password"
        placeholder="Password"
        className={cls.input}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ThemeButton.OUTLINE}
        size={ButtonSize.MEDIUM}
        className={cls.LoginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t("Login")}
      </Button>
    </div>
  );
});

export default LoginForm;
