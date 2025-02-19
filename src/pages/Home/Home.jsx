import React from "react";
import Banner from "../../components/Home/Banner";
import FeaturedProducts from "../../components/Home/FeaturedProducts";
import TrendingProducts from "../../components/Home/TrendingProducts";
import NewProduct from "../../components/Home/NewProduct";
import News from "../../components/Home/News";

const Home = () => {
  return (
    <section>
      <Banner></Banner>
      <section >
        <FeaturedProducts />
        <TrendingProducts />
        <News />
        <NewProduct></NewProduct>
      </section>
    </section>
  );
};

export default Home;
