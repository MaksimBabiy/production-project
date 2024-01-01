import React from "react";
import cls from "./Notification.module.scss";
type Props = {
  text: string;
};

export const Notification = (props: Props) => {
  return <div className={cls.notificationBody}>{props.text}</div>;
};
