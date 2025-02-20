import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ReviewTable from "../../../components/Dashboard/Tables/ReviewTable";
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
      const { data } = await axiosSecure(`/all-products`);
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

  const handleAddFeatured = async (_id) => {
    try {
      await axiosSecure.patch(`/featured-products/${_id}`);
      toast.success("Successfully added Featured Product");
      refetch();
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table border border-lime-500">
          {/* head */}
          <thead className="h-16 bg-lime-300 text-[15px] text-center">
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
                handleAddFeatured={handleAddFeatured}
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
