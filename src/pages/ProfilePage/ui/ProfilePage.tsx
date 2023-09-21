import { profileReducer } from "entities/Profile";
import React from "react";
import DynamicModuleLoader, {
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

type Props = {};

const reducers: ReducersList = {
  profile: profileReducer,
};
const ProfilePage = (props: Props) => {
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>123</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
