import { NavLink } from "react-router-dom";

const MenuItem = ({ text, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-lime-200   hover:text-gray-700 ${
          isActive ? "bg-lime-400  text-gray-700" : "text-gray-600"
        }`
      }
    >
      <Icon className="w-5 h-5" />

      <span className="mx-4 font-medium">{text}</span>
    </NavLink>
  );
};

export default MenuItem;
