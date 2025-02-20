import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import LoadingSpinier from "../components/Spiner/LoadingSpinier";

const UserRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isPending] = useRole();
  if (loading || isPending) {
    return <LoadingSpinier />;
  }
  if (user && role === "User") return children;

  return <Navigate to="/dashboard" replace="true" />;
};

export default UserRoute;
