import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import LoadingSpinier from "../components/Spiner/LoadingSpinier";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isPending] = useRole();
  if (loading || isPending) {
    return <LoadingSpinier />;
  }
  if (user && role === "Admin") return children;

  return <Navigate to="/dashboard/statistics" replace="true" />;
};

export default AdminRoute;
