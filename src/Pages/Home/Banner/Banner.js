import React from "react";
import "./Banner.css";
import { Link, useNavigate } from "react-router-dom";
import bannerBG from "../../../video/banner-bg.mp4";

const Banner = () => {
  const navigate = useNavigate();

  const navigateServices = () => {
    navigate("/services");
  };

  return (
    <div className="banner">
      <video autoPlay loop muted src={bannerBG}></video>

      <div className="container">
        <div className="row text-content">
          <div className="my-auto banner-text text-center">
            <h1>
              Problems with{" "}
              <span className="colorful-heading">PC Hardware?</span>
            </h1>
            <h1>
              I can be your{" "}
              <span className="colorful-heading">PC Hardware Expert</span>
            </h1>
            <p>
              Being tired of PC hardware issues? Don't worry. I am here to find
              solution for all sort of PC hardware issues you may have. Feel
              free to book me and get rid of your PC hardware issues.
            </p>
            <button
              onClick={navigateServices}
              className="btn banner-button px-4"
            >
              Find Services
            </button>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Banner;
