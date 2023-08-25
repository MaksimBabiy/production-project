import React, { useState } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./SideBar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import SideBarToggle from "../SideBarToggle/SideBarToggle";

type Props = {};

const SideBar = (props: Props) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={classNames(cls.SideBar, { [cls.collapsed]: collapsed })}>
      <SideBarToggle setCollapsed={setCollapsed} />
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

export default SideBar;
