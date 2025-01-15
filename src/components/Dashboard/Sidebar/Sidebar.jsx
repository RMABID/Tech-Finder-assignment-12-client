import { useState } from "react";
import logo from "../../../assets/logo.jpeg";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import MenuItem from "../Menu/MenuItem";
import { FcSettings } from "react-icons/fc";
import { BsGraphUp } from "react-icons/bs";
import User from "../Menu/User";
import Moderator from "../Menu/Moderator";
import Admin from "../Menu/Admin";
const Sidebar = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <section>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <img className="w-14" src={logo} alt="logo" />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden z-50 md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-lime-100 mx-auto">
              <Link to="/">
                <img
                  // className='hidden md:block'
                  src={logo}
                  alt="logo"
                  width="100"
                  height="100"
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {/*  Menu Items */}
              {/* {role === "customer" && <CustomerMenu />}
              {role === "seller" && <SellerMenu />}
              {role === "Admin" && <AdminMenu />} */}
              {/* 
              <MenuItem
                icon={BsGraphUp}
                label="Statistics"
                address="/dashboard"
              /> */}
              <User />
              <Moderator />
              <Admin />
             
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* <MenuItem
            icon={FcSettings}
            label="Profile"
            address="/dashboard/profile"
          /> */}
          <button className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform">
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
