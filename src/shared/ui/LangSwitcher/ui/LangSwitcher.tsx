import Button, { ThemeButton } from "shared/ui/Button/Button";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
type Props = {
  short?: boolean;
};

const LangSwitcher = (props: Props) => {
  const { t, i18n } = useTranslation();
  const onTranslate = async () => {
    i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
  };
  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={onTranslate}
      className={cls.translateBtn}
    >
      {t(props.short ? "EU" : "Lang")}
    </Button>
  );
};

export default LangSwitcher;
