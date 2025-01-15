import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ReviewTable from "../../../components/Dashboard/Tables/ReviewTable";
import { useState } from "react";
import toast from "react-hot-toast";

const ProductReview = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/products`);
      //   const { data } = await axiosSecure(`/featured-products`);
      return data;
    },
  });
  //status change with moderator
  const handleAcceptPost = async (_id, status) => {
    try {
      await axiosSecure.patch(`/product/${_id}`, { status });
      refetch();
      toast.success(status);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table border">
          {/* head */}
          <thead className="h-16 text-[15px] text-center">
            <tr>
              <th>Name</th>
              <th>View Details</th>
              <th>Add Featured</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {products.map((item, index) => (
              <ReviewTable
                handleAcceptPost={handleAcceptPost}
                key={index}
                item={item}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductReview;
