import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container">
      <div className="not-found-div d-flex flex-column align-items-center">
        <h1 className="error-404">404</h1>
        <h1 className="error-message">Page Not Found</h1>
        <p className="text-message text-center">
          Please try to find pages from menubar
        </p>
      </div>
    </div>
  );
};

export default NotFound;
