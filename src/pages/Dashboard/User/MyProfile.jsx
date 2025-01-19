import { useState } from "react";
import PaymentModal from "../../../components/Modal/PaymentModal";
import LoadingSpinier from "../../../components/Spiner/LoadingSpinier";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyProfile = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const {
    data: paymentStatus = {},
    refetch,
    isPending,
    isLoading,
  } = useQuery({
    queryKey: ["payment", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/user/${user?.email}`);
      return data;
    },
  });
  console.log(paymentStatus);

  if (loading || isLoading || isPending) return <LoadingSpinier />;

  const handlePay = async () => {
    document.getElementById("my_modal_1").showModal();
  };

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
            <p>Role : {paymentStatus?.role}</p>
            <p>{user?.email}</p>
          </div>
        </div>
      </div>
      <div className="flex px-12 items-center gap-6">
        {paymentStatus?.status === "Verified" ? (
          <p>{paymentStatus?.status} </p>
        ) : (
          <button onClick={handlePay} className="btn">
            Subscribed $50
          </button>
        )}
      </div>
      <PaymentModal refetch={refetch} />
    </section>
  );
};

export default MyProfile;
