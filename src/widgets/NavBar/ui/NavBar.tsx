import { classNames } from "shared/lib/classNames";
import cls from "./NavBar.module.scss";
type Props = {
  className?: string;
};

const NavBar = ({ className }: Props) => {
  return <div className={classNames(cls.navbar)}></div>;
};

export default NavBar;
