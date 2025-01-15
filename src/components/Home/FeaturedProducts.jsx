import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import FeaturedCard from "./FeaturedCard";

const FeaturedProducts = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: product = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const { data } = await axiosPublic("/featured-products");
      return data;
    },
  });
  const handleVote = async (_id) => {
    try {
      await axiosPublic.patch(`/featured/product/${_id}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  console.log(product);
  return (
    <section>
      <h1 className="text-center text-4xl my-3">Featured Products</h1>
      <div className="grid gap-8 grid-cols-2">
        {product
          .filter((item) => item.featured === "Added")
          .map((item, index) => (
            <FeaturedCard handleVote={handleVote} key={index} item={item} />
          ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
