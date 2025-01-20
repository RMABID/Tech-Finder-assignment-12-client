import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import UserProductTable from "../../../components/Dashboard/Tables/UserProductTable";
import LoadingSpinier from "../../../components/Spiner/LoadingSpinier";

const MyProducts = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/products/${user?.email}`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinier />;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table border border-lime-500">
          {/* head */}
          <thead className="h-16 bg-lime-300 text-[15px] text-center">
            <tr>
              <th>Name</th>
              <th>Votes</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {products.map((item, index) => (
              <UserProductTable refetch={refetch} key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
