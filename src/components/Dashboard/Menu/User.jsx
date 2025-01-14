
import MenuItem from "./MenuItem";
import { MdNoteAdd } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineProfile } from "react-icons/ai";

const User = () => {
  return (
    <section>
      <MenuItem icon={CgProfile} text="My Profile" address="my-profile" />
      <MenuItem icon={MdNoteAdd} text="Add Product" address="add-product" />
      <MenuItem icon={AiOutlineProfile} text="My Product" address="my-product" />
    </section>
  );
};

export default User;
