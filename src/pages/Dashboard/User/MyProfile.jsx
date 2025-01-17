import LoadingSpinier from "../../../components/Spiner/LoadingSpinier";
import useAuth from "../../../hooks/useAuth";

const MyProfile = () => {
  const { user, loading } = useAuth();
  if (loading) return <LoadingSpinier />;

  return (
    <section className="flex bg-purple-100 items-center justify-around">
      <div className="flex items-center  p-4 w-10/12 gap-x-4">
        <div>
          <img
            className="w-28 h-28 object-cover rounded-full"
            src={user?.photoURL}
            alt=""
          />
        </div>
        <div>
          <div>
            <p className="text-xl font-medium">{user?.displayName}</p>
            <p>Role : {"User"}</p>
            <p>{user?.email}</p>
          </div>
        </div>
      </div>
      <div className="flex px-12 items-center gap-6">
        <p>Verified</p>
        <button className="btn">Subscribed $50</button>
      </div>
    </section>
  );
};

export default MyProfile;
