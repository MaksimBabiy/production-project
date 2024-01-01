import React, { Suspense, useCallback } from "react";
import { Route, RouteProps, Routes } from "react-router-dom";
import {
  AppRoutes,
  AppRoutesProps,
  routeConfig,
} from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";
import RequireAuth from "./RequireAuth";

type Props = {};

const AppRouter = (props: Props) => {
  const renderWithWrapper = useCallback(
    ({ path, element, authOnly }: AppRoutesProps) => {
      return (
        <Route
          path={path}
          element={
            authOnly ? (
              <RequireAuth>
                <div className="page-wrapper">{element}</div>
              </RequireAuth>
            ) : (
              <div className="page-wrapper">{element}</div>
            )
          }
          key={path}
        />
      );
    },
    []
  );
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
};

export default AppRouter;
