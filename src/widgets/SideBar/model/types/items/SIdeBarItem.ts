import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutSvg from "shared/assets/icons/about.svg";
import HomeSvg from "shared/assets/icons/home.svg";
import ProfileSvg from "shared/assets/icons/profile.svg";

export interface SideBarItemType {
  path: string;
  text: string;
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const SideBarItemsList: SideBarItemType[] = [
  {
    path: RoutePath.main,
    icon: HomeSvg,
    text: "Main",
  },
  {
    path: RoutePath.about,
    icon: AboutSvg,
    text: "About",
  },
  {
    path: RoutePath.profile,
    icon: ProfileSvg,
    text: "Profile",
  },
];
