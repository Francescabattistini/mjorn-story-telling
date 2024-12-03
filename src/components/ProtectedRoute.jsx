import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { isAuth, userRole } = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && userRole !== "ADMIN") {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
