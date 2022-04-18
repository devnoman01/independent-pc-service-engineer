import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, price, description, img } = service;
  return (
    <div className="p-3 service rounded rounded-lg border">
      <img className="w-100" src={img} alt="" />
      <h3 className="mt-3">{name}</h3>
      <h3 className="fw-bold">${price}</h3>
      <p>{description}</p>
      <button className="btn primary-button">Book Now</button>
    </div>
  );
};

export default Service;
