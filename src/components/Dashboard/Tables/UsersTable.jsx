import React from "react";

const UsersTable = ({ item, setAction }) => {
  const { name, email } = item;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>

      <th>
        <select
          onChange={(e) => setAction(e.target.value)}
          defaultValue={"default"}
          className="select   w-full max-w-40"
        >
          <option disabled value={"default"}>
            Who shot first?
          </option>
          <option>Moderator</option>
          <option>Admin</option>
        </select>
      </th>
    </tr>
  );
};

export default UsersTable;
