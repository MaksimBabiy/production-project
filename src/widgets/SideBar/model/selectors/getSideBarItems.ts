import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { SideBarItemType } from "../types/items/SIdeBarItem";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutSvg from "shared/assets/icons/about.svg";
import HomeSvg from "shared/assets/icons/home.svg";
import ProfileSvg from "shared/assets/icons/profile.svg";
import ArticleSvg from "shared/assets/icons/article.svg";

export const getSideBarItems = createSelector(getUserAuthData, (userData) => {
  const SideBarItemsList: SideBarItemType[] = [
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
  ];
  if (userData) {
    SideBarItemsList.push(
      {
        path: RoutePath.profile + userData?.id,
        icon: ProfileSvg,
        text: "Profile",
      },
      {
        path: RoutePath.articles,
        icon: ArticleSvg,
        text: "Articles",
      }
    );
  }
  return SideBarItemsList;
});
