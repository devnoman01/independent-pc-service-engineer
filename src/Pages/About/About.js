import React from "react";
import Footer from "../Shared/Footer/Footer";

const About = () => {
  return (
    <div>
      <div className="container mx-auto my-5">
        <div className="row text-center">
          <h1 className="my-4">About Me</h1>
          <div className="col-md-6 col-12-12 mx-auto">
            <img
              className="w-50 mx-auto"
              src="https://avatars.githubusercontent.com/u/67538033"
              alt=""
            />
          </div>
          {/* my profile information */}
          <div className="my-4">
            <h3 className="my-1">Md. Abdullah Al Noman</h3>
            <p>CS Engineer, Tech Enthusiast</p>
          </div>
          {/* my mission information */}
          <div>
            <h3 className="my-4">My Mission</h3>
            <div className="col-md-8 col-12-12 mx-auto p-3">
              <p style={{ textAlign: "justify" }}>
                I want to be a good Software Engineer in future and I have
                started learning web development from programming hero. After
                that I will go for learing competetive programming. That wull
                make my software engineering fundation stronger. Then I will try
                to find a job or internship to gather experience as a software
                engineer. I will forllow this process to be a good Software
                Engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
