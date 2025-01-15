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
      //   const { data } = await axiosSecure(`/featured-products`);
      return data;
    },
  });

  // const acceptProducts = products.map(item);

  if (isLoading) return <p>hi i,m coming</p>;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table border">
          {/* head */}
          <thead className="h-16 text-[15px] text-center">
            <tr>
              <th>Name</th>
              <th>Votes</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {/* {products.map((item, index) =>
              item.status === "Pending" ? (
                <UserProductTable key={index} item={item} />
              ) : null
            )} */}
            {/* {products
              .filter((item) => item.status === "Pending")
              .map((item, index) => (
                <UserProductTable key={index} item={item} />
              ))} */}
            {products.map((item, index) => (
              <UserProductTable key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
