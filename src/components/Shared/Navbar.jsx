import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { IoMdLogIn } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo.jpeg";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const { user, logOut } = useAuth();
  return (
    <nav className="border-b fixed shadow bg-gray-50 w-full z-50">
      <div className="flex py-4 items-center justify-evenly">
        <div>
          <Link to={"/"} className="text-2xl flex items-center font-bold">
            <img className="w-14 border rounded-full p-1" src={logo} alt="" />
            Tech Finder
          </Link>
        </div>
        <div className="">
          <ul className="md:flex hidden items-center gap-x-5">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-products">Products</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          {user && user?.email ? (
            <div className="flex items-center gap-x-3">
              <div className="dropdown  dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 border-2 rounded-full">
                    <img alt={user?.displayName} src={user?.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm text-center  dropdown-content bg-white rounded-box z-40 mt-3 w-52 p-2 shadow"
                >
                  <li className="flex  justify-center">
                    <p className="">{user?.displayName}</p>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard"}
                      className="flex text-md  justify-center"
                    >
                      Dashboard
                    </Link>
                  </li>

                  <li className="mt-3">
                    <button onClick={logOut} className="btn">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
              <div className="drawer md:hidden  drawer-end">
                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  {/* Page content here */}
                  {/* <label
                    htmlFor="my-drawer-4"
                    className="drawer-button btn btn-primary"
                  >
                    Open drawer
                  </label> */}
                  <label
                    htmlFor="my-drawer-4"
                    className="text-2xl font-bold drawer-button btn btn-ghost -mt-2"
                  >
                    <CiMenuFries />
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}

                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/all-products">Products</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <Link to={"/login"}>
              <Button outline text={"Sign in"} icon={IoMdLogIn} />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
