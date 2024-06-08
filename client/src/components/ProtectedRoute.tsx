import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { IProtectedRoute } from "../@types/types";

const ProtectedRoute: IProtectedRoute = ({ children, auth }) => {
  const { role } = useContext(AuthContext);
  const allow = role >= auth;
  return allow ? <>{children}</> : <div>No Access</div>;
};

export default ProtectedRoute;
