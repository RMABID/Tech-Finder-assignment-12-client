import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpinier from "../components/Spiner/LoadingSpinier";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <LoadingSpinier />;
  if (user) return children;

  return <Navigate to={"/login"} state={{ from: location }} replace="true" />;
};

export default PrivateRoute;
