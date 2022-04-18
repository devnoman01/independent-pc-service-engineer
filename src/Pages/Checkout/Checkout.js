import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useServices from "../../hooks/useServices";

const Checkout = () => {
  const { serviceId } = useParams();
  const [bookedServices, setBookedServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setBookedServices(data));
  }, []);

  let bookedService = {};
  bookedServices
    .filter((booked) => booked.id == serviceId)
    .map((filterdService) => (bookedService = { ...filterdService }));
  console.log(bookedService);
  const { name, price, description, img } = bookedService;

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-4 col-sm-12 p-3">
          <img className="w-100" src={img} alt="" />
        </div>
        <div className="col-md-8 col-sm-12 p-3">
          <h1>{name}</h1>
          <p>{description}</p>
          <h3>${price}</h3>
        </div>
      </div>
      <div className="row my-5"></div>
    </div>
  );
};

export default Checkout;
