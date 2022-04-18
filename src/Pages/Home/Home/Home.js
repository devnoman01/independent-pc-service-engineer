import React from "react";
import FeaturedServices from "../../Services/FeaturedServices/FeaturedServices";
import Services from "../../Services/Services/Services";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedServices></FeaturedServices>
      <Feature></Feature>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
