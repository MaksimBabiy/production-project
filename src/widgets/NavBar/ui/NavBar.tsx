import { classNames } from "shared/lib/classNames";
import cls from "./NavBar.module.scss";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUserName";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import { AppDispatch } from "app/providers/StoreProvider/config/store";
type Props = {
  className?: string;
};

const NavBar = ({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const userAuthData = useSelector(getUserAuthData);
  const onCloseModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);
  useEffect(() => {
    if (userAuthData) setIsAuthModal((prev) => !prev);
  }, [userAuthData]);
  return (
    <div className={classNames(cls.navbar)}>
      <div className={cls.links}>
        {userAuthData ? (
          <Button onClick={onLogout} theme={ThemeButton.CLEAR}>
            {t("Exit")}
          </Button>
        ) : (
          <Button onClick={onCloseModal} theme={ThemeButton.CLEAR}>
            {t("Login")}
          </Button>
        )}
      </div>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};

export default NavBar;
