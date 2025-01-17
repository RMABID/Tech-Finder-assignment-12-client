import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: role = [], isPending } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/user/role/${user?.email}`);
      return data.role;
    },
  });
  console.log(role);
  return [role, isPending];
};

export default useRole;
