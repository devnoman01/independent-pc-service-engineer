import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, price, description, img } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/checkout/${id}`);
  };
  return (
    <div className="p-3 service rounded rounded-lg border">
      <img className="w-100" src={img} alt="" />
      <h3 className="mt-3">{name}</h3>
      <h3 className="fw-bold">${price}</h3>
      <p>{description}</p>
      <button
        onClick={() => navigateToServiceDetail(id)}
        className="btn primary-button"
      >
        Book Now
      </button>
    </div>
  );
};

export default Service;
