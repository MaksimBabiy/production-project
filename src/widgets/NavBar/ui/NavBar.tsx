import { classNames } from "shared/lib/classNames";
import cls from "./NavBar.module.scss";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { memo, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUserName";
import { getUserAuthData, userActions } from "entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useAuth } from "shared/lib/hooks/useAuth";
import { useSelector } from "react-redux";
import { StateSchema } from "app/providers/StoreProvider";

type Props = {
  className?: string;
};
const NavBar = memo((props: Props) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const userAuthData = useAuth();
  const data = useSelector((state: StateSchema) => state.user);
  console.log(data);

  useEffect(() => {
    if (userAuthData) setIsAuthModal(() => false);
  }, [userAuthData]);

  const onCloseModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

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
