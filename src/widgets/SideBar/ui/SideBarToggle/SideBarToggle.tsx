import React from "react";
import Button, { ThemeButton } from "shared/ui/Button/Button";

type Props = {
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBarToggle = (props: Props) => {
  const onToggle = () => {
    props.setCollapsed((prev) => !prev);
  };
  return (
    <Button theme={ThemeButton.CLEAR} onClick={onToggle}>
      Toggle
    </Button>
  );
};

export default SideBarToggle;
