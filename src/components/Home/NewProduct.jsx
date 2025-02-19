import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import FeaturedCard from "./FeaturedCard";
import { Link } from "react-router-dom";

const NewProduct = () => {
  const axiosPublic = useAxiosPublic();
  const { data: Products = [] } = useQuery({
    queryKey: ["Trending Products"],
    queryFn: async () => {
      const { data } = await axiosPublic("/vote-product");
      return data;
    },
  });

  return (
    <section className="w-10/12 mx-auto my-6">
      <div className="lg:w-4/6 mx-auto">
        <h1 className="text-center text-4xl my-3">New Products</h1>
        <p className="text-center">
          Explore a curated selection of top-rated tech products, web apps, AI
          tools, software, games, and mobile apps. Discover innovative tools,
          insightful reviews, and user-driven ratings to stay updated with the
          latest trends in technology and digital experiences.
        </p>
      </div>
      <div className="grid my-16 gap-8 lg:grid-cols-2">
        {Products.map((item, index) => (
          <FeaturedCard key={index} item={item} />
        ))}
      </div>
      <div>
        <Link
          to={"/all-products"}
          className="btn bg-lime-400 rounded-full text-white hover:text-black hover:bg-lime-200 flex justify-center w-40 mx-auto"
        >
          See all
        </Link>
      </div>
    </section>
  );
};

export default NewProduct;
