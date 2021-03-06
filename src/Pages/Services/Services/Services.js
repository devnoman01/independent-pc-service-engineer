import React from "react";
import "./Services.css";
import useServices from "../../../hooks/useServices";
import Footer from "../../Shared/Footer/Footer";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useServices();

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className="my-5 fw-bold text-center">My Services</h1>
          <div className="service-parent-div">
            {services.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Services;
