import React from "react";
import { classNames } from "shared/lib/classNames";
import Button, { ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import cls from "./SideBarToggle.module.scss";

type Props = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBarToggle = (props: Props) => {
  const onToggle = () => {
    props.setCollapsed((prev) => !prev);
  };
  return (
    <Button
      square={true}
      theme={ThemeButton.BACKGROUND_INVERTED}
      onClick={onToggle}
      className={cls.collasedBtn}
      size={ButtonSize.LARGE}
    >
      {props.collapsed ? ">" : "<"}
    </Button>
  );
};

export default SideBarToggle;
