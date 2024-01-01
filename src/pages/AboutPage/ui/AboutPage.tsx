import React from "react";
import { useTranslation } from "react-i18next";

type Props = {};

const AboutPage = (props: Props) => {
  const { t } = useTranslation("about");
  return (
    <div>
      {t("About Page")}
      <img
        style={{ width: "100%" }}
        src="https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png"
        alt=""
      />
    </div>
  );
};

export default AboutPage;
