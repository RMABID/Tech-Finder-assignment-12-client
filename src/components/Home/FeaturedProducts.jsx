import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import FeaturedCard from "./FeaturedCard";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import LoadingSpinier from "../Spiner/LoadingSpinier";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    data: product = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const { data } = await axiosPublic("/featured/products");
      return data;
    },
  });

  if (isLoading) return <LoadingSpinier />;

  const handleVote = async (_id, owner_info) => {
    if (!user?.email) {
      return navigate("/login");
    }
    if (user?.email === owner_info.email) {
      return toast.error("You can't vote on your own product!");
    }
    try {
      await axiosPublic.patch(`/featured/product/${_id}`);
      refetch();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <section className="w-10/12 mx-auto my-6">
      <div className="lg:w-4/6 mx-auto">
        <h1 className="text-center text-4xl my-3">Featured Products</h1>
        <p className="text-center">
          Explore a curated selection of top-rated tech products, web apps, AI
          tools, software, games, and mobile apps. Discover innovative tools,
          insightful reviews, and user-driven ratings to stay updated with the
          latest trends in technology and digital experiences.
        </p>
      </div>
      <div className="grid my-16 gap-8 lg:grid-cols-2">
        {product
          // .filter((item) => item?.featured === "Added")
          ?.map((item, index) => (
            <FeaturedCard handleVote={handleVote} key={index} item={item} />
          ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
