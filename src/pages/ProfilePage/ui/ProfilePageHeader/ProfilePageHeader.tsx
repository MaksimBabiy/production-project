import React, { useCallback } from "react";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import Text from "shared/ui/Text/Text";
import cls from "./ProfilePageHeader.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { postProfileData, profileActions } from "entities/Profile";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";

type Props = {
  readOnly?: boolean;
};

const ProfilePageHeader = (props: Props) => {
  const { t } = useTranslation("");
  const dispatch = useAppDispatch();
  const userData = useSelector(getUserAuthData);
  const profile = useSelector(getProfileData);
  const canEdit = userData?.id == profile?.id;
  const EditBtn = useCallback(() => {
    dispatch(profileActions.changeReadOnly());
  }, [dispatch]);

  const CancelBtn = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const SaveBtn = useCallback(() => {
    if (userData) {
      dispatch(postProfileData(userData.id));
    }
  }, []);

  return (
    <div className={classNames(cls.header, {}, [])}>
      <Text title={t("Profile")} />
      <div className={classNames(cls.headerBtnBlock, {}, [])}>
        {canEdit &&
          (props.readOnly ? (
            <Button
              isHover
              theme={ThemeButton.OUTLINE}
              className={cls.editBtn}
              onClick={EditBtn}
            >
              {t("Edit")}
            </Button>
          ) : (
            <div>
              <Button
                isHover
                theme={ThemeButton.OUTLINE_GREEN}
                className={cls.editBtn}
                onClick={SaveBtn}
              >
                {t("Save")}
              </Button>
              <Button
                isHover
                theme={ThemeButton.OUTLINE_RED}
                className={cls.editBtn}
                onClick={CancelBtn}
              >
                {t("Cancel")}
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfilePageHeader;
