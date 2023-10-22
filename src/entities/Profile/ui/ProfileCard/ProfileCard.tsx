import { useTranslation } from "react-i18next";
import Text, { TextTheme } from "shared/ui/Text/Text";
import cls from "./ProfileCard.module.scss";
import { Input } from "shared/ui/Input";
import { Profile } from "entities/Profile/model/types/profile";
import { Loader } from "shared/ui/Loader";
import { classNames } from "shared/lib/classNames";
import { Avatar } from "shared/ui/Avatar";
import { Currency, CurrencySelector } from "entities/Currency";
import { Country, CountrySelector } from "entities/Country";

type Props = {
  data?: Profile;
  error?: string;
  Loading?: boolean;
  readonly?: boolean;
  onChangeLastName: (e: string) => void;
  onChangeFirstName: (e: string) => void;
  onChangeCity: (e: string) => void;
  onChangeAge: (e: string) => void;
  onChangeUserName: (e: string) => void;
  onChangeAvatar: (e: string) => void;
  onChangeCurrency?: (e: Currency) => void;
  onChangeCountry?: (e: Country) => void;
};

export const ProfileCard = (props: Props) => {
  const { t } = useTranslation("");

  const {
    data,
    error,
    Loading,
    readonly,
    onChangeLastName,
    onChangeCity,
    onChangeAge,
    onChangeFirstName,
    onChangeCurrency,
    onChangeCountry,
    onChangeUserName,
  } = props;
  if (Loading) {
    return (
      <div className={classNames(cls.profilecard, { [cls.loading]: true }, [])}>
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <div className={classNames(cls.profilecard, {}, [cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t("error")}
          text={t("try to reload page")}
        />
      </div>
    );
  }
  return (
    <div
      className={classNames(cls.profilecard, { [cls.editing]: !readonly }, [])}
    >
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar size={100} url={data.avatar} />
          </div>
        )}
        <Input
          value={data?.first}
          placeholder={t("Your firstname")}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeFirstName}
        />
        <Input
          value={data?.lastname}
          readonly={readonly}
          placeholder={t("Your lastname")}
          className={cls.input}
          onChange={onChangeLastName}
        />
        <Input
          value={data?.age}
          type="number"
          readonly={readonly}
          placeholder={t("Your age")}
          className={cls.input}
          onChange={onChangeAge}
        />
        <Input
          value={data?.city}
          readonly={readonly}
          placeholder={t("Your city")}
          className={cls.input}
          onChange={onChangeCity}
        />
        <Input
          value={data?.username}
          readonly={readonly}
          placeholder={t("Your username")}
          className={cls.input}
          onChange={onChangeUserName}
        />
        <Input
          value={data?.avatar}
          readonly={readonly}
          placeholder={t("Your avatar")}
          className={cls.input}
          onChange={onChangeCity}
        />
        <CurrencySelector
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelector
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
