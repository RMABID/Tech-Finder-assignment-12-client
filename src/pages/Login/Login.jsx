import { IoLogoGithub, IoLogoGoogle } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { loading, signIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="py-24">
        <div className="md:flex w-10/12 py-12 mx-auto  shrink-0 shadow-xl">
          <div className="text-center lg:text-left">
            <img src="" alt="" />
          </div>
          <div className="  w-full max-w-sm">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type here"
                  className="input rounded-md input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input rounded-md input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-[#D1A054B3] text-white text-lg font-medium rounded-md">
                  {loading ? (
                    <TbFidgetSpinner className="animate-spin m-auto" />
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>
            <p className="text-center text-[#D1A054] text-md font-medium">
              New here? <Link className="text-red-500" to={"/register"}>Create a New Account</Link>
            </p>
            <p className="text-center text-black my-2">Or sign in with</p>
            <div
              className="flex justify-center items-center gap-4 py-2
            "
            >
              <p className="border hover:bg-[#D1A054] hover:scale-150 transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-white cursor-pointer p-1 rounded-full border-black text-sm ">
                <FaFacebookF />
              </p>
              <p className="border hover:bg-[#D1A054] hover:scale-150 transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-white cursor-pointer p-1 rounded-full border-black text-sm ">
                <IoLogoGoogle />
              </p>
              <p className="border hover:bg-[#D1A054] hover:scale-150 transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-white cursor-pointer p-1 rounded-full border-black text-sm ">
                <IoLogoGithub />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
