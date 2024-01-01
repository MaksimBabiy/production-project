import { getUserAuthData } from "entities/User";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const userData = useSelector(getUserAuthData);
  if (userData) {
    return true;
  } else {
    return false;
  }
};
