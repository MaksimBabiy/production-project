import { classNames } from "shared/lib/classNames";
import { useTheme } from "./providers/ThemeProviders";
import { AppRouter } from "./router";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { Suspense, useEffect, useState } from "react";
import { PageLoader } from "widgets/PageLoader";

const App = () => {
  const { theme } = useTheme();
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback={<PageLoader />}>
        <NavBar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
