import React from "react";

const About = () => {
  return (
    <div className="container mx-auto my-5">
      <div className="row text-center">
        <h1 className="my-4">About Me</h1>
        <img
          className="w-50 mx-auto"
          src="https://avatars.githubusercontent.com/u/67538033"
          alt=""
        />
        <div className="my-4">
          <h3 className="my-1">Md. Abdullah Al Noman</h3>
          <p>CS Engineer, Tech Enthusiast</p>
        </div>
        <div>
          <h3 className="my-4">My Mission</h3>
          <p>
            I want to be a good Software Engineer in future and I have started
            learning web development from programming hero. After that I will go
            for learing competetive programming. That wull make my software
            engineering fundation stronger. Then I will try to find a job or
            internship to gather experience as a software engineer. I will
            forllow this process to be a good Software Engineer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
