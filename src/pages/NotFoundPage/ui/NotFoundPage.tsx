import { useTranslation } from "react-i18next";
import cls from "./NotFoundPage.module.scss";
type Props = {};

const NotFoundPage = (props: Props) => {
  const { t } = useTranslation();
  return <div className={cls.page404}>{t("Page Not Found")}</div>;
};

export default NotFoundPage;
