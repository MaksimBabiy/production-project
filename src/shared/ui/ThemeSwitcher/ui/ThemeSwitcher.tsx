import { Theme, useTheme } from "app/providers/ThemeProviders";
import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames";
import LightSvg from "shared/assets/icons/theme-light.svg";
import DarkSvg from "shared/assets/icons/theme-dark.svg";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { memo } from "react";

type Props = {
  classNames?: string;
};

const ThemeSwitcher = memo((props: Props) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [props.classNames])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <LightSvg /> : <DarkSvg />}
    </Button>
  );
});

export default ThemeSwitcher;
