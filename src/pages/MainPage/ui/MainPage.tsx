import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import cls from "./MainPage.module.scss";
import Counter from "entities/Counter/ui/Counter";
import { useSelector } from "react-redux";
import { getCounterValue } from "entities/Counter/selectors/getCounterValue/getCounterValue";
type Props = {};

const MainPage = (props: Props) => {
  // useEffect(() => {
  //   throw new Error();
  // }, []);

  const { t } = useTranslation("main");

  return (
    <div className={cls.mainPage}>
      {t("Main Page")}
      <Counter />
    </div>
  );
};

export default MainPage;
