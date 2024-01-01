import React, { FC, memo } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface Props extends LinkProps {
  children: React.ReactNode;
  theme: AppLinkTheme;
  className?: string;
}

const AppLink: FC<Props> = memo((props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      {...otherProps}
      className={classNames(cls.AppLink, {}, [className as string, cls[theme]])}
      to={to}
    >
      {children}
    </Link>
  );
});

export default AppLink;
