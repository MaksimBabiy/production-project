import { classNames } from "shared/lib/classNames";
import cls from "./NavBar.module.scss";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { memo, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUserName";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import { AppDispatch } from "app/providers/StoreProvider/config/store";

import { getCounter } from "entities/Counter/selectors/getCounter/getCounter";

type Props = {
  className?: string;
};
const NavBar = memo((props: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const userAuthData = useSelector(getUserAuthData);
  const form = useSelector(getCounter);
  console.log(userAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  useEffect(() => {
    if (userAuthData) setIsAuthModal(() => false);
  }, [userAuthData]);

  if (userAuthData) {
    return (
      <div className={classNames(cls.navbar, {}, [])}>
        <div className={cls.links}>
          <Button onClick={onLogout} theme={ThemeButton.CLEAR}>
            {t("Exit")}
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className={classNames(cls.navbar, {}, [])}>
      <div className={cls.links}>
        <Button onClick={onCloseModal} theme={ThemeButton.CLEAR}>
          {t("Login")}
        </Button>
      </div>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </div>
  );
});

export default NavBar;
