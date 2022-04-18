import React from "react";
import FeaturedServices from "../../Services/FeaturedServices/FeaturedServices";
import Services from "../../Services/Services/Services";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedServices></FeaturedServices>
      <Footer></Footer>
    </div>
  );
};

export default Home;
