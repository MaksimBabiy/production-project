import { classNames } from "shared/lib/classNames";
import cls from "./NavBar.module.scss";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUserName";
type Props = {
  className?: string;
};

const NavBar = ({ className }: Props) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const onCloseModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);
  return (
    <div className={classNames(cls.navbar)}>
      <div className={cls.links}>
        <Button onClick={onCloseModal} theme={ThemeButton.CLEAR}>
          {t("Login")}
        </Button>
      </div>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};

export default NavBar;
