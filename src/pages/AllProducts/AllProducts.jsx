import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import FeaturedCard from "../../components/Home/FeaturedCard";

const AllProducts = () => {
  const axiosPublic = useAxiosPublic();
  const { data: all_products = [], isLoading } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const { data } = await axiosPublic("/products");
      return data;
    },
  });
  console.log(all_products);
  return (
    <section className="w-10/12 mx-auto">
      <div className="grid my-6 gap-8 lg:grid-cols-2">
        {all_products
          .filter((item) => item.status === "Accepted")
          .map((item, index) => (
            <FeaturedCard key={index} item={item} />
          ))}
      </div>
    </section>
  );
};

export default AllProducts;
