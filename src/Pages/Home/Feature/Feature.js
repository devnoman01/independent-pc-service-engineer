import React from "react";
import "./Feature.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCalendarAlt,
  faCameraAlt,
  faClock,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

const Feature = () => {
  return (
    <div className="feature">
      <div className="container py-4">
        <div className="row py-5">
          <h1 className="fw-bold text-center mb-5">Why Hire Me</h1>
          <div className="col-lg-3 col-md-6 col-sm-12 feature-item">
            <FontAwesomeIcon className="feature-icon" icon={faCalendar} />
            <h4>6 Day per Week</h4>
            <p>Sat-Thu</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 feature-item">
            <FontAwesomeIcon className="feature-icon" icon={faClock} />
            <h4>Flexible Timing</h4>
            <p>10AM - 10PM</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 feature-item">
            <FontAwesomeIcon className="feature-icon" icon={faCameraAlt} />
            <h4>Virtual Support</h4>
            <p>Audio/Video Call Support</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 feature-item">
            <FontAwesomeIcon className="feature-icon" icon={faMoneyBill} />
            <h4>Flexible Payment</h4>
            <p>Digital/Cash Both Accepted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
