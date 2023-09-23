import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { getProfileLoading } from "entities/Profile/model/selectors/getProfileLoading/getProfileLoading";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import Text from "shared/ui/Text/Text";
import cls from "./ProfileCard.module.scss";
import { Input } from "shared/ui/Input";

type Props = {};

export const ProfileCard = (props: Props) => {
  const { t } = useTranslation("profile");
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const Loading = useSelector(getProfileLoading);
  return (
    <div className={cls.profilecard}>
      <div className={cls.header}>
        <Text title={t("Profile")} />
        <Button theme={ThemeButton.OUTLINE} className={cls.editBtn}>
          {t("Edit")}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t("Your firstname")}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t("Your lastname")}
          className={cls.input}
        />
      </div>
    </div>
  );
};
