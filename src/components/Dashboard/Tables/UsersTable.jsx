import React from "react";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UsersTable = ({ item, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { name, email, role } = item;
  const handelRole = async (value) => {
    try {
      await axiosSecure.patch(`/user/${user?.email}`, { role: value });
      refetch();
      toast.success("Role Updated Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>

      <th>
        <select
          onChange={(e) => handelRole(e.target.value)}
          defaultValue={"default"}
          className="select   w-full max-w-40"
        >
          <option disabled value={"default"}>
            Add role
          </option>
          <option>Moderator</option>
          <option>Admin</option>
        </select>
      </th>
    </tr>
  );
};

export default UsersTable;
