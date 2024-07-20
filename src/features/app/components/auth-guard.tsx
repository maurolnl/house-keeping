import { useAuth } from "@/features/auth/hooks/useAuth";
import { saveCurrentLocation } from "@/lib/utils";
import { PATHS } from "@/router/paths";
import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}
export const RequireAuth: React.FC<Props> = ({ children }) => {
  const auth = useAuth();
  // if (!auth.isAuthenticated) {
  //   // Redirect them to the /login page, but save the current location they were
  //   // trying to go to when they were redirected. This allows us to send them
  //   // along to that page after they login, which is a nicer user experience
  //   // than dropping them off on the home page.
  //   saveCurrentLocation();
  //   return <Navigate to={PATHS.auth.login} replace />;
  // }

  return children;
};
