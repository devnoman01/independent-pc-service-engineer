import React from "react";
import { Link } from "react-router-dom";
import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";

const FeaturedServices = () => {
  const [services, setServices] = useServices();
  const featuredServices = services.slice(0, 6);
  return (
    <div>
      <div id="" className="container my-4">
        <div className="row">
          <h1 className="my-5 fw-bold text-center">My Services</h1>
          <div className="service-parent-div">
            {featuredServices.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </div>
        </div>
        <div className="row w-50 mx-auto">
          <Link
            to="/services"
            className="btn primary-button col-md-4 mx-auto mb-5"
          >
            All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
