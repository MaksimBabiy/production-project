import { memo, useState } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./SideBar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import SideBarToggle from "../SideBarToggle/SideBarToggle";

import SideBarItem from "../SideBarItem/SideBarItem";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useSelector } from "react-redux";
import { getSideBarItems } from "widgets/SideBar/model/selectors/getSideBarItems";
import { Link } from "react-router-dom";
type Props = {};

const SideBar = memo((props: Props) => {
  const [collapsed, setCollapsed] = useState(true);
  const SideBarItemsList = useSelector(getSideBarItems);
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
        {SideBarItemsList.map((c) => {
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
