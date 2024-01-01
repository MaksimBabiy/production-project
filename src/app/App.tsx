import { classNames } from "shared/lib/classNames";
import { useTheme } from "./providers/ThemeProviders";
import { AppRouter } from "./router";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { Suspense, useEffect } from "react";
import { PageLoader } from "widgets/PageLoader";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./providers/StoreProvider/config/store";
import { getUserInited, userActions } from "entities/User";

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const isInited = useSelector(getUserInited);

  useEffect(() => {
    document.body.className = theme;
  }, []);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, []);

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
