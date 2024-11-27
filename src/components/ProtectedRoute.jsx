import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const isAuth = localStorage.getItem("isAuth") === "true";
  const userRole = localStorage.getItem("userRole");

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  /* if (adminOnly && userRole !== "ADMIN") {
    return <Navigate to="/" />;
  } */

  return children;
};

export default ProtectedRoute;
