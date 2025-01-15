import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import UsersTable from "../../../components/Dashboard/Tables/UsersTable";
import { useState } from "react";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [action, setAction] = useState("user");
  const { data: user = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure("/users");
      return data;
    },
  });
  console.log(action);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table border">
          {/* head */}
          <thead className="h-16 text-[15px] text-center">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {user.map((item, index) => (
              <UsersTable setAction={setAction} key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
