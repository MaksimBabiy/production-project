import { useTranslation } from "react-i18next";

type Props = {};

const MainPage = (props: Props) => {
  const { t } = useTranslation("main");
  return <div>{t("Main Page")}</div>;
};

export default MainPage;
