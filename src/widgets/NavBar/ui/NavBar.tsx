import { classNames } from "shared/lib/classNames";
import cls from "./NavBar.module.scss";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
type Props = {
  className?: string;
};

const NavBar = ({ className }: Props) => {
  const { t } = useTranslation("translation");
  return (
    <div className={classNames(cls.navbar)}>
      <div className={cls.links}>
        <AppLink to={"/"} className={cls.mainLink} theme={AppLinkTheme.PRIMARY}>
          {t("Main")}
        </AppLink>
        <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
          {t("About")}
        </AppLink>
      </div>
    </div>
  );
};

export default NavBar;
