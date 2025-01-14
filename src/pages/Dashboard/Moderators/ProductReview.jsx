import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ReviewTable from "../../../components/Dashboard/Tables/ReviewTable";

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
  console.log(products);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>View Details</th>
              <th>Add Featured</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <ReviewTable key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductReview;
