import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, price, description, img, lists } = service;
  const navigate = useNavigate();

  // dynamic route navigation
  const navigateToServiceDetail = (id) => {
    navigate(`/checkout/${id}`);
  };
  return (
    <div className="service-card rounded rounded-lg border">
      <img className="w-100" src={img} alt="" />
      <div className="p-3">
        <h5 className="my-4">{name}</h5>

        <p className="card-description">{description}</p>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h3 className="my-auto">${price}</h3>
          </div>
          <div>
            <button
              onClick={() => navigateToServiceDetail(id)}
              className="btn primary-button"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
