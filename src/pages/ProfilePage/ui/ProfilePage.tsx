import {
  ProfileCard,
  fetchProfileData,
  getProfileValidationError,
  profileActions,
  profileReducer,
} from "entities/Profile";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { getProfileLoading } from "entities/Profile/model/selectors/getProfileLoading/getProfileLoading";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import ProfilePageHeader from "./ProfilePageHeader/ProfilePageHeader";
import { getProfileReadOnly } from "entities/Profile/model/selectors/getProfileReadOnly/getProfileReadOnly";
import { getProfileForm } from "entities/Profile/model/selectors/getProfileForm/getProfileForm";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import Text, { TextTheme } from "shared/ui/Text/Text";
import { ValidateProfileError } from "entities/Profile/model/types/profile";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { getUserAuthData } from "entities/User";

type Props = {};

const reducers: ReducersList = {
  profile: profileReducer,
};
const ProfilePage = (props: Props) => {
  const { id } = useParams();
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const form = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const Loading = useSelector(getProfileLoading);
  const readOnly = useSelector(getProfileReadOnly);
  const validationErrors = useSelector(getProfileValidationError);
  const dispatch = useAppDispatch();

  const validateErrorTranslates = {
    [ValidateProfileError.INCORRECT_AGE]: t("wrong age"),
    [ValidateProfileError.INCORRECT_COUNTRY]: t("wrong country"),
    [ValidateProfileError.INCORRECT_USER_DATA]: t("wrong name or last name"),
    [ValidateProfileError.SERVER_ERROR]: t("server error"),
    [ValidateProfileError.NO_DATA]: t("no data"),
    [ValidateProfileError.INCORRECT_CURRENCY]: t("wrong currency"),
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch]);
  const onChangeFirstName = useCallback(
    (e: string) => {
      dispatch(profileActions.updateProfile({ first: e || "" }));
    },
    [dispatch]
  );
  const onChangeLastName = useCallback(
    (e: string) => {
      dispatch(profileActions.updateProfile({ lastname: e || "" }));
    },
    [dispatch]
  );
  const onChangeAge = useCallback(
    (e: string) => {
      dispatch(profileActions.updateProfile({ age: Number(e || 0) }));
    },
    [dispatch]
  );
  const onChangeCity = useCallback(
    (e: string) => {
      dispatch(profileActions.updateProfile({ city: e || "" }));
    },
    [dispatch]
  );
  const onChangeUserName = useCallback(
    (e: string) => {
      dispatch(profileActions.updateProfile({ username: e || "" }));
    },
    [dispatch]
  );
  const onChangeAvatar = useCallback(
    (e: string) => {
      dispatch(profileActions.updateProfile({ avatar: e || "" }));
    },
    [dispatch]
  );
  const onChangeCurrency = useCallback(
    (e: Currency) => {
      console.log(e);
      dispatch(profileActions.updateProfile({ currency: e }));
    },
    [dispatch]
  );
  const onChangeCountry = useCallback(
    (e: Country) => {
      dispatch(profileActions.updateProfile({ country: e }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        <ProfilePageHeader readOnly={readOnly} />
        {validationErrors &&
          validationErrors?.length > 0 &&
          validationErrors.map((err) => (
            <Text
              key={err}
              theme={TextTheme.ERROR}
              title="Validation error"
              text={t(validateErrorTranslates[err])}
            />
          ))}
        <ProfileCard
          data={form}
          error={error}
          Loading={Loading}
          readonly={readOnly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUserName={onChangeUserName}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
