import React from "react";
import Banner from "../../components/Home/Banner";
import FeaturedProducts from "../../components/Home/FeaturedProducts";
import TrendingProducts from "../../components/Home/TrendingProducts";

const Home = () => {
  return (
    <section>
      <Banner></Banner>
      <section className="w-10/12 mx-auto my-6">
        <FeaturedProducts />
        <TrendingProducts />
      </section>
    </section>
  );
};

export default Home;
