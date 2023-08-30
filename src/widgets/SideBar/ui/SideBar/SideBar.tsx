import React, { useState } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./SideBar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import SideBarToggle from "../SideBarToggle/SideBarToggle";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useTranslation } from "react-i18next";
import AboutSvg from "shared/assets/icons/about.svg";
import HomeSvg from "shared/assets/icons/home.svg";
type Props = {};

const SideBar = (props: Props) => {
  const [collapsed, setCollapsed] = useState(true);
  const { t } = useTranslation("translation");
  return (
    <div className={classNames(cls.SideBar, { [cls.collapsed]: collapsed })}>
      <SideBarToggle setCollapsed={setCollapsed} collapsed={collapsed} />
      <div
        className={classNames(
          cls.sideBarItems,
          { [cls.collapsed]: collapsed },
          []
        )}
      >
        <AppLink
          to={RoutePath.main}
          className={cls.mainLink}
          theme={AppLinkTheme.PRIMARY}
        >
          {collapsed ? <HomeSvg width={40} height={40} /> : t("Main")}
        </AppLink>
        <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>
          {collapsed ? <AboutSvg width={40} height={40} /> : t("About")}
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};

export default SideBar;
