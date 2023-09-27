import { memo, useState } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./SideBar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import SideBarToggle from "../SideBarToggle/SideBarToggle";

import { SideBarItemsList } from "widgets/SideBar/model/types/items/SIdeBarItem";
import SideBarItem from "../SideBarItem/SideBarItem";
type Props = {};

const SideBar = memo((props: Props) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [])}
    >
      <SideBarToggle setCollapsed={setCollapsed} collapsed={collapsed} />
      <div
        className={classNames(
          cls.sideBarItems,
          { [cls.collapsed]: collapsed },
          []
        )}
      >
        {SideBarItemsList.map((c, index) => {
          return <SideBarItem item={c} collapsed={collapsed} key={c.path} />;
        })}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
});

export default SideBar;
