import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Footer from "../Shared/Footer/Footer";
import "./Checkout.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const navigate = useNavigate();
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
    .map((filteredService) => (bookedService = { ...filteredService }));
  const { name, price, description, img } = bookedService;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    toast("Order Placed.");
    bookedService = {};
    navigate("/home");
  };

  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <h1 className="text-center mb-4">Checkout Your Order</h1>
          <div className="checkout-row">
            <div className="col-md-6 col-sm-12 p-3 my-3">
              <div className="selected-service">
                <h3 className="px-3 mb-4 text-center">
                  Selected Service Details
                </h3>
                <div className="p-3">
                  <img className="w-100" src={img} alt="" />
                </div>
                <div className="p-3 service-info">
                  <h4>{name}</h4>
                  <p className="description">{description}</p>
                  <h4>${price}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 p-2 my-3">
              <div className="">
                <h3 className="px-3 mb-4 text-center">Recipient Details</h3>
                <form
                  onSubmit={handlePlaceOrder}
                  className="border rounded checkout-form"
                >
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Recipient Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Contact Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="" className="form-label">
                      Select preferred time slot
                    </label>
                    <select
                      required
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option defaultValue>Select slot</option>
                      <option value="1">Morning</option>
                      <option value="2">Noon</option>
                      <option value="3">Afternoon</option>
                      <option value="4">Evening</option>
                      <option value="5">Night</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Remote Support
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        On Site Support
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Address
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="2"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <h4 className="my-4">Cost: ${price}</h4>
                    <button type="submit" className="btn primary-button">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5"></div>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
