import React from "react";
import "./Banner.css";
import bannerBG from "../../../video/banner-bg.mp4";

const Banner = () => {
  return (
    <div className="banner">
      {/* <video autoPlay loop muted src={bannerBG}></video> */}

      <div className="container">
        <div className="row text-content">
          <div className="my-auto banner-text text-center">
            <h1>Problems with PC Hardware?</h1>
            <h1>I can be you PC Hardware Expert</h1>
            <p>
              Being tired of PC hardware issues? Don't worry. I am here to find
              solution for all sort of PC hardware issues you may have. Feel
              free to book me and get rid of your PC hardware issues.
            </p>
            <button className="btn primary-button px-5">Book Now</button>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Banner;
