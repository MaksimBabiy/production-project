import React, { CSSProperties } from "react";
import cls from "./Icon.module.scss";
import { classNames } from "shared/lib/classNames";
type Props = {};

const Icon = ({
  Svg,
  classnames,
  onClickHandle,
}: {
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  classnames?: string;
  onClickHandle?: () => void;
}) => {
  const style: CSSProperties = {};
  return (
    <Svg
      className={classNames(cls.icon, {}, [classnames])}
      onClick={onClickHandle}
    />
  );
};

export default Icon;
