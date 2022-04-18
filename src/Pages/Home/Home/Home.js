import React from "react";
import Services from "../../Services/Services/Services";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
