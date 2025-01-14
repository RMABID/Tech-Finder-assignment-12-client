import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import UserProductTable from "../../../components/Dashboard/Tables/UserProductTable";

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
  console.log(products);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Votes</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <UserProductTable key={index} item={item} />
            ))}
          </tbody>
          \
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
