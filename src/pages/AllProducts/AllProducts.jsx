import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import FeaturedCard from "../../components/Home/FeaturedCard";
import SearchBar from "../../components/SearchBar";
import { useState } from "react";

const AllProducts = () => {
  const axiosPublic = useAxiosPublic();
  // const { data: all_products = [], isLoading } = useQuery({
  //   queryKey: ["all-products"],
  //   queryFn: async () => {
  //     const { data } = await axiosPublic("/products");
  //     return data;
  //   },
  // });

  const [search, setSearch] = useState("");

  const { data: all_products = [], isLoading } = useQuery({
    queryKey: ["all-products", search],
    queryFn: async () => {
      const { data } = await axiosPublic(`/products?search=${search}`);
      return data;
    },
  });
  return (
    <section className="w-10/12 mx-auto">
      <SearchBar setSearch={setSearch} />
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
