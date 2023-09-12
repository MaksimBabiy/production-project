import React from "react";
import { Modal } from "shared/ui/Modal";
import LoginForm from "../LoginForm/LoginForm";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const LoginModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy={true}>
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
