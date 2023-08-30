import { useEffect } from "react";
import { useTranslation } from "react-i18next";

type Props = {};

const MainPage = (props: Props) => {
  // useEffect(() => {
  //   throw new Error();
  // }, []);

  const { t } = useTranslation("main");
  return <div>{t("Main Page")}</div>;
};

export default MainPage;
