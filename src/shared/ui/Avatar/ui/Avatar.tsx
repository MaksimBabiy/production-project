import React, { CSSProperties, useMemo } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./Avatar.module.scss";

type Props = {
  url: string;
  size: number;
  classnames?: string;
};

const Avatar = (props: Props) => {
  const { url, size, classnames } = props;
  const sizes = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size]
  );

  return (
    <img
      style={sizes}
      src={url}
      className={classNames(cls.Avatar, {}, [classnames])}
    />
  );
};

export default Avatar;
