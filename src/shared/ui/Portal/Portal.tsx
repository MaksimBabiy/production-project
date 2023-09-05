import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  element?: HTMLElement;
};

const Portal = ({ children, element = document.body }: Props) => {
  return createPortal(children, element);
};

export default Portal;
