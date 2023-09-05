import { classNames } from "shared/lib/classNames";
import { useTheme } from "./providers/ThemeProviders";
import { AppRouter } from "./router";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { Suspense, useState } from "react";
import { PageLoader } from "widgets/PageLoader";
import { Modal } from "shared/ui/Modal";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
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
