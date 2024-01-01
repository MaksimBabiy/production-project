import React from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./Card.module.scss";
type Props = {
  className?: string;
  children: React.ReactNode;
  onOpen?: () => void;
};

const Card = ({ children, className, onOpen }: Props) => {
  return (
    <div
      onClick={onOpen}
      className={classNames(cls.card, {}, [cls[className as string]])}
    >
      {children}
    </div>
  );
};

export default Card;
