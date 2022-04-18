import React from "react";
import useServices from "../../../hooks/useServices";

const Services = () => {
  const [services, setServices] = useServices();
  console.log(services);

  return (
    <div className="container">
      <div className="row">
        <h1 className="my-5 fw-bold text-center">My Services</h1>
        <div></div>
      </div>
    </div>
  );
};

export default Services;
