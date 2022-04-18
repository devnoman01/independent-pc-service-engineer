import React from "react";
import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";

const FeaturedServices = () => {
  const [services, setServices] = useServices();
  const featuredServices = services.slice(0, 6);
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className="my-5 fw-bold text-center">My Services</h1>
          <div className="service-parent-div">
            {featuredServices.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
