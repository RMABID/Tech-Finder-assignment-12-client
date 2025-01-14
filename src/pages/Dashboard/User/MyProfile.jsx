import useAuth from "../../../hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <section className="">
      <div className="flex bg-green-300 p-4 w-10/12 gap-x-12">
        <div>
          <img
            className="w-48 h-48 object-cover rounded-full"
            src={user?.photoURL}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-2xl">User Profile</h1>
          <div>
            <p>
              Name : <span>{user?.displayName}</span>
            </p>
            <p>
              Email : <span>{user?.email}</span>
            </p>
          </div>
          <div>
            <button className="btn">Subscribed $50</button>
            <p>Verified</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
