import { Suspense, memo } from "react";
import { Modal } from "shared/ui/Modal";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { loginReducer } from "features/AuthByUserName/model/slice/loginSlice";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
const initialReducers: ReducersList = {
  loginForm: loginReducer,
};
const LoginModal = memo(({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy={true}>
      <Suspense fallback="">
        <DynamicModuleLoader reducers={initialReducers}>
          <LoginFormAsync />
        </DynamicModuleLoader>
      </Suspense>
    </Modal>
  );
});

export default LoginModal;
