import { FaUsers } from "react-icons/fa";
import MenuItem from "./MenuItem";

const Admin = () => {
  return (
    <section>
      <MenuItem text={"Manage Users"} address={"manage-users"} icon={FaUsers} />
    </section>
  );
};

export default Admin;
