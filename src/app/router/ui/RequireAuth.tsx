import { getUserAuthData } from "entities/User";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useAuth } from "shared/lib/hooks/useAuth";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const userData = useAuth();
  if (!userData) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
