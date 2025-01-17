import { TbFidgetSpinner } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGithub, IoLogoGoogle } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import imageUpload from "../../api/utils";
import toast from "react-hot-toast";
import signup_img from "../../assets/logo/Sign up-rafiki.png";

const Register = () => {
  const { createUser, updateUserProfile, loading, loginGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  //   const from = location.state?.from?.pathname || "/";

  const handleSignRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    const photoURL = await imageUpload(image);

    try {
      const result = await createUser(email, password);
      await updateUserProfile(name, photoURL);
      toast.success("SuccessFully Login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginGoogle();
      toast.success("SuccessFully Login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-login_bg bg-center bg-cover bg-no-repeat">
      <div className="py-24">
        <div className="md:flex bg-white md:w-[960px] rounded-xl px-8 justify-center  py-6 mx-auto  shrink-0 shadow-xl">
          <div className="  w-full max-w-sm">
            <form onSubmit={handleSignRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type here"
                  className="input rounded-md input-bordered"
                  required
                />
              </div>
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
                  <Link  className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">Photo</span>
                </label>
                <input
                  type="file"
                  name="image"
                  placeholder="Type here"
                  className="input rounded-md input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-2">
                <button className="btn bg-[#D1A054B3] text-white text-lg font-medium rounded-md">
                  {loading ? (
                    <TbFidgetSpinner className="animate-spin m-auto" />
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
            </form>
            <p className="text-center text-[#D1A054] text-md font-medium">
              Already registered?{" "}
              <Link className="text-red-500" to={"/login"}>
                Go to log in
              </Link>
            </p>
            <p className="text-center text-black my-2">Or sign in with</p>
            <div
              className="flex justify-center items-center gap-4 py-2
                "
            >
              <p className="border hover:bg-[#D1A054] hover:scale-150 transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-white cursor-pointer p-1 rounded-full border-black text-sm ">
                <FaFacebookF />
              </p>
              <p
                onClick={handleGoogleLogin}
                className="border hover:bg-[#D1A054] hover:scale-150 transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-white cursor-pointer p-1 rounded-full border-black text-sm "
              >
                <IoLogoGoogle />
              </p>
              <p className="border hover:bg-[#D1A054] hover:scale-150 transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-white cursor-pointer p-1 rounded-full border-black text-sm ">
                <IoLogoGithub />
              </p>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <img className="w-full" src={signup_img} alt="" />
            <Link
              to={"/"}
              className="text-center flex justify-center btn w-40 mx-auto"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
