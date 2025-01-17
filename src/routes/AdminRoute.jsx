import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isPending] = useRole();
  if (loading || isPending) {
    return <p>i'm coming</p>;
  }
  if (user && role === "Admin") return children;

  return <Navigate to="/dashboard" replace="true" />;
};

export default AdminRoute;
