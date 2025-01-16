import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { IoMdLogIn } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo.jpeg";

const Navbar = () => {
  const { user, logOut } = useAuth();
  return (
    <nav className="border-b fixed w-full z-50">
      <div className="flex py-4 items-center justify-evenly">
        <div>
          <Link to={"/"} className="text-2xl flex items-center font-bold">
            <img className="w-14 border rounded-full p-1" src={logo} alt="" />
            Product Hunt
          </Link>
        </div>
        <div className="">
          <ul className="flex items-center gap-x-5">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-products">Products</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex">
          {user && user?.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt={user?.displayName} src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  rounded-box z-40 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <p>{user?.displayName}</p>
                </li>
                <li>
                  <Link to={"/dashboard"} className="justify-between">
                    Dashboard
                  </Link>
                </li>

                <li className="mt-3">
                  <Button onClick={logOut} small text={"logout"}>
                    Logout
                  </Button>
                </li>
              </ul>
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
