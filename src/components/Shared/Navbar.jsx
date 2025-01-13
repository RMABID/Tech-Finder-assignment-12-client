import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { IoMdLogIn } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="border-b fixed w-full z-50">
      <div className="flex py-4 items-center justify-evenly">
        <div>
          <Link to={"/"} className="text-2xl font-bold">
            Product Hunt
          </Link>
        </div>
        <div className="">
          <ul className="flex items-center gap-x-5">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex">
          <Link to={"/login"}>
            <Button outline text={"Sign in"} icon={IoMdLogIn} />
          </Link>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-40 mt-3 w-52 p-2 shadow"
            >
              <li>
                <p>abid</p>
              </li>
              <li>
                <Link className="justify-between">Dashboard</Link>
              </li>

              <li className="mt-3">
                <Button small text={"logout"}>
                  Logout
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
