import { FaUsers } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { BsGraphUp } from "react-icons/bs";

const Admin = () => {
  return (
    <section>
      <MenuItem icon={BsGraphUp} text="Statistics" address="/dashboard" />
      <MenuItem text={"Manage Users"} address={"manage-users"} icon={FaUsers} />
    </section>
  );
};

export default Admin;
