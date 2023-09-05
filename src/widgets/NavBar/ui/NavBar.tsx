import { classNames } from "shared/lib/classNames";
import cls from "./NavBar.module.scss";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { Modal } from "shared/ui/Modal";
import { useTranslation } from "react-i18next";
type Props = {
  className?: string;
};

const NavBar = ({ className }: Props) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);
  return (
    <div className={classNames(cls.navbar)}>
      <div className={cls.links}>
        <Button onClick={onToggleModal} theme={ThemeButton.CLEAR}>
          {t("Login")}
        </Button>
      </div>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde
        ratione dolores iste consequuntur delectus!
      </Modal>
    </div>
  );
};

export default NavBar;
