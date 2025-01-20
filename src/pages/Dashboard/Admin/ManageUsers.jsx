import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import UsersTable from "../../../components/Dashboard/Tables/UsersTable";
import LoadingSpinier from "../../../components/Spiner/LoadingSpinier";
import useAuth from "../../../hooks/useAuth";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/all-users/${user?.email}`);
      return data;
    },
  });
  if (isLoading) return <LoadingSpinier />;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table border border-lime-500">
          {/* head */}
          <thead className="h-16 bg-lime-300 text-[15px] text-center">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {users.map((item, index) => (
              <UsersTable refetch={refetch} key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
