import { memo } from "react";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./SideBarItem.module.scss";
import { SideBarItemType } from "widgets/SideBar/model/types/items/SIdeBarItem";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
type Props = {
  collapsed: boolean;
  item: SideBarItemType;
};

const SideBarItem = memo(({ collapsed, item }: Props) => {
  const { t } = useTranslation("translation");

  return (
    <AppLink
      to={item.path}
      className={cls.mainLink}
      theme={AppLinkTheme.PRIMARY}
    >
      {collapsed ? <item.icon width={40} height={40} /> : t(`${item.text}`)}
    </AppLink>
  );
});
export default SideBarItem;
