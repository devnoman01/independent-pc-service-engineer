import React from "react";
import "./Subscribe.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Subscribe = () => {
  // subscribe button onclick handle
  const handleSubscribe = (event) => {
    event.preventDefault();
    if (event.target.email.value) {
      toast("Thanks for Subscribing");
    } else {
      toast("Please enter email.");
    }
  };
  return (
    // extra part
    <div className="container my-5">
      <div className="row subscribe">
        <h1 className="fw-bold text-center mb-5">Subscribe</h1>
        <div className="col-md-6 col-sm-12 p-2">
          <div className="half-width">
            <h2 className="subscribe-heading">What to get amazing deals?</h2>
            <p>
              Personally I love reward and discounts offers. So, I myself often
              provide discount deals on my services on various occasion. These
              offers are valid for specific time periods only. Subscribe now if
              you don't wanna miss them.
            </p>
          </div>
        </div>
        {/* subscribe email input part */}
        <div className="col-md-6 col-sm-12 p-2">
          <div className="half-width">
            <h3 className="subscribe-heading">Subcribe to get offers.</h3>
            <div className="mb-2 input-div">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter Email
              </label>
              <input
                name="email"
                type="email"
                className="form-control w-75"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <button
                onClick={handleSubscribe}
                className="btn my-3 primary-button"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Subscribe;
