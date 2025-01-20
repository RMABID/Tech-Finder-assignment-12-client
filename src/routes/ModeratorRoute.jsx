import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import LoadingSpinier from "../components/Spiner/LoadingSpinier";
import { Navigate } from "react-router-dom";

const ModeratorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isPending] = useRole();
  if (loading || isPending) {
    return <LoadingSpinier />;
  }
  if (user && role === "Moderator") return children;

  return <Navigate to="/dashboard/statistics" replace="true" />;
};

export default ModeratorRoute;
