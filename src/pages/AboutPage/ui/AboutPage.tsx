import React from "react";
import { useTranslation } from "react-i18next";

type Props = {};

const AboutPage = (props: Props) => {
  const { t } = useTranslation("about");
  return <div>{t("About Page")}</div>;
};

export default AboutPage;
